//const TestItem = require('../models/testCheckItem.js')

const checkTest = (req, res) => {
  console.log(req.body)
  //Object.keys(req.body.answers).forEach((e) => {
  // console.log(e, req.body.answers[e])
  //})
  res.status(200).json({ message: 'Принят запрос проверки всего теста' })
}

const checkOne = (req, res) => {
  console.log(req.body)
  res.status(200).json({ message: 'Принят запрос проверки одного вопроса' })
}

module.exports = { checkTest, checkOne }
