const products = require('../app/controllers/product')
const users = require('../app/controllers/users')
const checkTest = require('../app/controllers/checkTest')
const auth = require('../app/controllers/auth.js')
const authMiddleware = require('../app/middleware/auth')

module.exports = (app) => {
  //test
  app.get('/api/probe', (req, res) => res.send('We are on TEST page'))

  //check test
  app.post('/api/checktest', authMiddleware, checkTest.checkTest)

  //products
  app.get('/api/products', authMiddleware, products.getAll)
  app.post('/api/products', authMiddleware, products.create)
  app.put('/api/products/:id', authMiddleware, products.update)
  app.delete('/api/products/:id', authMiddleware, products.remove)

  //users
  app.get('/api/users/', authMiddleware, users.getUsers)
  app.post('/api/users/:id', authMiddleware, users.getById)
  app.post('/api/isauth', authMiddleware, users.isAuth)
  app.post('/api/my', authMiddleware, users.my)
  app.put('/api/users/updatefname', authMiddleware, users.updateUser)
  //auth
  app.post('/api/auth', auth.signIn)
  app.post('/api/register', auth.register)
  app.post('/api/refresh-tokens', auth.refreshTokens)
}
