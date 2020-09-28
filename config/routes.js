const products = require('../app/controllers/product')
const auth = require('../app/controllers/auth.js')
const authMiddleware = require('../app/middleware/auth')

module.exports = (app) => {
  //test
  //app.get('/probe', (req, res) => res.send('We are on TEST page'))
  //products
  app.get('/products', authMiddleware, products.getAll)

  app.post('/products', authMiddleware, products.create)

  app.put('/products/:id', authMiddleware, products.update)

  app.delete('/products/:id', authMiddleware, products.remove)

  //auth
  app.post('/auth', auth.signIn)
  app.post('/register', auth.register)
  app.post('/refresh-tokens', auth.refreshTokens)
}
