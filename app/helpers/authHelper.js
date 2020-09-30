const { v4: uuidv4 } = require('uuid')
const jwt = require('jsonwebtoken')
const config = require('config')
const Token = require('../models/token')

const tokens = config.get('jwt').token
const secret = config.get('jwt').secret

const generateAccessToken = (userId) => {
  const payload = {
    userId,
    type: tokens.access.type,
  }
  const options = { expiresIn: tokens.access.expiresIn }
  return jwt.sign(payload, secret, options)
}

const generateRefreshToken = () => {
  const payload = {
    id: uuidv4(),
    type: tokens.refresh.type,
  }
  const options = { expiresIn: tokens.refresh.expiresIn }
  return {
    id: payload.id,
    token: jwt.sign(payload, secret, options),
  }
}

const replaceDbRefreshToken = (tokenId, userId) => {
  return Token.findOneAndRemove({ userId })
    .exec()
    .then(() => {
      Token.create({ tokenId, userId })
    })
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  replaceDbRefreshToken,
}
