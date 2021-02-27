const { Schema, model } = require('mongoose')

const logSchema = new Schema({
  id: Number,
  user: { type: String, require: true },
  message: String,
  eventTime: Date,
})

module.exports = model('Log', logSchema)
