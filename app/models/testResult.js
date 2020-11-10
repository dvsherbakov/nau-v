const mongoose = require('mongoose')

const TestResultItemSchema = new mongoose.Schema({
  questionId: { type: String, required: true },
  answers: [Number],
  quality: Number,
})

const TestResultSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  results: [TestResultItemSchema],
  testAt: Date,
  count: Number,
})

module.exports = mongoose.model('TestResults', TestResultSchema)
