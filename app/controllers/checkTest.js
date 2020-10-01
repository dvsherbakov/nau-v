//const TestItem = require('../models/testCheckItem.js')
const Answers = require('../models/initials/TestAnswers')

const compareArray = (id, dest_obj) => {
  if (!(id in Answers)) return 0
  //Правильные ответы, srt-тип проверки
  const { ans, srt } = Answers[id]
  const src = srt ? ans.sort() : ans
  const dest = srt
    ? dest_obj.map((el) => +el).sort()
    : dest_obj.map((el) => +el)
  let sum = 0
  const count = Math.min(src.length, dest.length)

  for (var i = 0; i < count; i++) {
    if (src[i] === dest[i]) {
      sum++
    }
  }

  return sum / src.length
}

const checkTest = (req, res) => {
  //const result = {}

  Object.keys(req.body.answers).forEach((e) => {
    const res = compareArray(e, req.body.answers[e])
    console.log(res)
  })
  res.status(200).json({ message: 'Принят запрос проверки всего теста' })
}

const checkOne = (req, res) => {
  console.log(req.body)
  res.status(200).json({ message: 'Принят запрос проверки одного вопроса' })
}

module.exports = { checkTest, checkOne }
