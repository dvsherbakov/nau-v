const mongoose = require('mongoose')

const TestResultSchema = new mongoose.Mongoose.Schema({
  userId: { type: String, required: true },
  testId: { type: String, required: true },
})

module.exports = mongoose.model('TestResultSchema', TestResultSchema)
