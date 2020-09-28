const jwt = require('jsonwebtoken')
const config = require('config')

const secret = config.get('jwt').secret

module.exports = (req, res, next) => {
  const authHeader = req.get('Autorization')
  if (!authHeader) {
    res.status(401).json({ message: 'Token not provided!' })
    return
  }
  const token = authHeader.replace('Bearer ', '')
  try {
    const payload = jwt.verify(token, secret)
    if (payload.type !== 'access') {
      res.status(401).json({ message: 'Invalid token!' })
      return
    }
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      res.status(401).json({ message: 'Token expired!' })
      return
    }
    if (e instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ message: 'Invalid token!' })
    }
  }
  next()
}
