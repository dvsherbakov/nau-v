//const mongoose = require('mongoose')
const bCrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Log = require('../models/log')
const Token = require('../models/token')
const config = require('config')
const secret = config.get('jwt').secret
const authHelper = require('../helpers/authHelper')

const updateToken = async (userId) => {
  const accessToken = authHelper.generateAccessToken(userId)
  const refreshToken = authHelper.generateRefreshToken()

  await authHelper.replaceDbRefreshToken(refreshToken.id, userId)
  return { accessToken, refreshToken: refreshToken.token, userId }
}

const signIn = (req, res) => {
  const { email, password } = req.body
  User.findOne({ email })
    .exec()
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: 'User does not exists!', status: -2 })
      }
      const isValid = bCrypt.compareSync(password, user.password)
      if (isValid) {
        const logRecord = new Log({
          user: user.email,
          message: 'Log in',
          eventTime: Date.now(),
        })
        logRecord.save()
        updateToken(user._id).then((tokens) =>
          res.json({
            ...tokens,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            accepted: user.accepted,
          })
        )
      } else {
        res.status(401).json({ message: 'Invalid credetials!', status: -1 })
      }
    })
    .catch((err) => res.status(500).json({ status: -1, message: err.message }))
}

const register = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body
    const candidate = await User.findOne({ email })
    if (candidate) {
      res
        .status(400)
        .json({ message: 'Такой пользователь уже существует', status: 1 })
      return
    }

    const hashedPassword = await bCrypt.hash(password, 12)
    const user = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    })

    await user.save()

    res.status(201).json({ message: 'Пользователь создан', status: 0 })
  } catch (e) {
    return res.status(500).json({
      message: 'Что-то пошло не так, попробуйте снова',
      message: e.message,
      status: -1,
    })
  }
}

const refreshTokens = (req, res) => {
  const { refreshToken } = req.body
  let payload
  try {
    payload = jwt.verify(refreshToken, secret)
    if (payload.type !== 'refresh') {
      res.status(400).json({ message: 'Invalid token!', payload })
      return
    }
  } catch (e) {
    console.error(e)
    if (e instanceof jwt.TokenExpiredError) {
      res.status(400).json({
        message: 'Token expired!',
        addition: 'instanceof jwt.TokenExpiredError',
      })
      return
    } else if (e instanceof jwt.JsonWebTokenError) {
      res.status(400).json({
        message: 'Invalid token!',
        addition: 'instanceof jwt.JsonWebTokenError',
      })
      return
    }
  }

  Token.findOne({ tokenId: payload.id })
    .exec()
    .then((token) => {
      if (token === null) {
        throw new Error('Invalid token!')
      }
      return updateToken(token.userId)
    })
    .then((tokens) => {
      res.json(tokens)
    })
    .catch((err) =>
      res.status(400).json({ message: 'Ошибка обновления токена' })
    )
}

module.exports = { signIn, refreshTokens, register }
