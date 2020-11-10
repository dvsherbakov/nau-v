const TestResult = require('../models/testResult')
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
  const result = {}

  try {
    const answersArr = []
    Object.keys(req.body.answers).forEach((e) => {
      const res = compareArray(e, req.body.answers[e])
      result[e] = res
      answersArr.push({
        questionId: e,
        answers: req.body.answers[e].map((i) => +i),
        quality: res,
      })
    })
    saveResult({
      userId: req.body.userId,
      results: answersArr,
      testAt: Date.now(),
      count: req.body.count,
    })
    res.status(200).json(result)
  } catch (e) {
    res.status(500).json(e.message)
  }
}

const saveResult = async (result) => {
  const testRes = new TestResult(result)
  await testRes.save()
}

const checkOne = (req, res) => {
  console.log(req.body)
  res.status(200).json({ message: 'Принят запрос проверки одного вопроса' })
}

module.exports = { checkTest, checkOne }
