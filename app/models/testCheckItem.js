const mongoose = require('mongoose')

const TestCheckSchema = new mongoose.Schema({
  id: { type: String, required: true, index: { unique: true } },
  right: [Number],
})

module.exports = mongoose.model('TestCheckItem', TestCheckSchema)
