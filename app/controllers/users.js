const User = require('../models/user')
const TestResults = require('../models/testResult')
const jwt_decode = require('jwt-decode')

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
  const { userId } = jwt_decode(token)
  const user = await User.findById(userId)
  if (!user) {
    res.status(500).json({ message: 'User does not exists!' })
  } else if (user.accepted < 30) {
    res.status(403).json({ message: 'Low permission level' })
  }
  const users = await User.find()
  if (!users) {
    res.status(500).json({ message: 'Users does not exists!' })
  }
  //const usersIds = users.map((user) => user.id)
  //const testRes = await TestResults.find({ userId: usersIds })

  const result = users.map((user) => {
    return {
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      accepted: user.accepted,
      //tResult: testRes.filter((r) => r.userId === user._id.toString()),
    }
  })
  res.status(200).json(result)
}

const updateUser = async (req, res) => {
  const token = req.get('Authorization').replace('Bearer', '')
  try {
    const { userId } = jwt_decode(token)
    const user = await User.findByIdAndUpdate(userId, req.body)
    console.log(user)
    console.log(req.body)
    res.status(200).json({ message: 'user was updated' })
  } catch (e) {
    res.status(201).json({ message: e.message })
  }
}

const isAuth = (_req, res) => {
  res.status(200).json({ message: 'Ok auth now' })
}

const my = async (req, res) => {
  const token = req.get('Authorization').replace('Bearer', '')
  try {
    const { userId } = jwt_decode(token)
    const user = await User.findById(userId)
    res.status(200).json({
      message: 'my controller say ok',
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      accepted: user.accepted,
    })
  } catch (e) {
    res.status(201).json({ message: e.message })
  }
}

module.exports = { getById, getUsers, isAuth, my, updateUser }
