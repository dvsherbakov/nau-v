const User = require('../models/user')

const getById = async (req, res) => {
  const { userId } = req.body

  const user = await User.findById(userId)
  if (!user) {
    res.status(401).json({ message: 'User does not exists!' })
  }
  res.status(200).json({
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  })
}

module.exports = { getById }
