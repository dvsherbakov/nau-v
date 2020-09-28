//const mongoose = require('mongoose')
const bCrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Token = require('../models/token')
const config = require('config')
const secret = config.get('jwt').secret
const authHelper = require('../helpers/authHelper')

const updateToken = (userId) => {
  const accessToken = authHelper.generateAccessToken(userId)
  const refreshToken = authHelper.generateRefreshToken()

  return authHelper
    .replaceDbRefreshToken(refreshToken.id, userId)
    .then(() => ({ accessToken, refreshToken: refreshToken.token }))
}

const signIn = (req, res) => {
  const { email, password } = req.body
  User.findOne({ email })
    .exec()
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: 'User does not exists!' })
      }
      const isValid = bCrypt.compareSync(password, user.password)
      if (isValid) {
        updateToken(user._id).then((tokens) => res.json(tokens))
      } else {
        res.status(401).json({ message: 'Invalid credetials!' })
      }
    })
    .catch((err) => res.status(500).json({ message: err.message }))
}

const register = async (req, res) => {
  console.log('register request')
  try {
    const { email, password } = req.body

    const candidate = await User.findOne({ email })
    if (candidate) {
      res.status(400).json({ message: 'Такой пользователь уже существует' })
      return
    }

    const hashedPassword = await bCrypt.hash(password, 12)
    const user = new User({ email, password: hashedPassword })

    await user.save()

    res.status(201).json({ message: 'Пользователь создан' })
  } catch (e) {
    return res.status(500).json({
      message: 'Что-то пошло не так, попробуйте снова',
      message: e.message,
    })
  }
}

const refreshTokens = (req, res) => {
  const { refreshToken } = req.body
  let payload
  try {
    payload = jwt.verify(refreshToken, secret)
    console.log(payload)
    if (payload.type !== 'refresh') {
      res.status(400).json({ message: 'Invalid token!' })
      return
    }
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      console.log('token expired!')
      res.status(400).json({ message: 'Token expired!' })
      return
    } else if (e instanceof jwt.JsonWebTokenError) {
      console.log('invalid token')
      res.status(400).json({ message: 'Invalid token!' })
      return
    }
  }

  Token.findOne({ tokenId: payload.id })
    .exec()
    .then((token) => {
      console.log(token)
      if (token === null) {
        throw new Error('Invalid token!')
      }

      return updateToken(token.userId)
    })
    .then((tokens) => res.json(tokens))
    .catch((err) => res.status(400).json({ message: res.message }))
}

module.exports = { signIn, refreshTokens, register }
