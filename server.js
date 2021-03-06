const { createServer } = require('http')
const express = require('express')
const config = require('config')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')
const mongoose = require('mongoose')

const MONGOURI = config.get('mongoUri')
const normalizePort = (port) => parseInt(port, 10)
const PORT = normalizePort(process.env.PORT || 5000)

const app = express()
const conf = require('./config')

conf.express(app)
conf.routes(app)

const dev = app.get('env') !== 'production'

async function start() {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    const server = createServer(app)
    server.listen(PORT, (err) => {
      if (err) throw err

      console.log(`Server started on port ${PORT}`)
    })
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

if (!dev) {
  console.log('PROD')

  app.disable('x-powered-by')
  app.use(compression())
  app.use(morgan('common'))

  app.use(express.static(path.resolve(__dirname, 'build')))
  app.get('/api/probe', (req, res) => res.send('We are on TEST page'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

if (dev) {
  console.log('DEV')
  app.get('/about', (req, res) => res.send('We are on main page'))
  //app.use(morgan('dev'))
}

start()
