const User = require('../models/user')
const TestResults = require('../models/testResult')
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
  const payload = jwt.verify(token, secret)
  const user = await User.findById(payload.userId)
  if (!user) {
    res.status(500).json({ message: 'User does not exists!' })
  } else if (user.accepted < 30) {
    res.status(403).json({ message: 'Low permission level' })
  }
  const users = await User.find()
  if (!users) {
    res.status(500).json({ message: 'Users does not exists!' })
  }
  const usersIds = users.map((user) => user.id)
  const testRes = await TestResults.find({ userId: usersIds })

  const result = users.map((user) => {
    return {
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      accepted: user.accepted,
      tResult: testRes.filter((r) => r.userId === user._id.toString()),
    }
  })
  res.status(200).json(result)
}

module.exports = { getById, getUsers }
