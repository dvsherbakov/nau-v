const User = require('../models/user')
const config = require('config')
const jwt = require('jsonwebtoken')

const secret = config.get('jwt').secret

const getById = async (req, res) => {
  const userId = req.params.id

  const user = await User.findById(userId)
  if (!user) {
    res.status(500).json({ message: 'User does not exists!' })
  }
  res.status(200).json({
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    accepted: user.accepted,
  })
}

const getUsers = async (req, res) => {
  const token = req.headers.authorization.replace('Bearer ', '')
  console.log(token)
  payload = jwt.verify(token, secret)
  console.log(payload)
  const users = await User.find()
  if (!users) {
    res.status(500).json({ message: 'Users does not exists!' })
  }
  const result = users.map((user) => {
    return {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    }
  })
  res.status(200).json(result)
}

module.exports = { getById, getUsers }
