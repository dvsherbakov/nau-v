import React, { useContext, useRef } from 'react'
import { AuthContext } from '../AuthContext'
import { Phisics } from './Phisics'
import './Questions.css'

export default function TestQuiz() {
  const { jwtApi } = useContext(AuthContext)
  const answers = useRef({})

  const setAnswer = (id, res) => {
    const obj = {}
    obj[id] = res
    answers.current = { ...answers.current, ...obj }
  }
  const clickHandler = () => {
    jwtApi.checkTest(answers.current)
  }
  const quests = Phisics.map((item) => (
    <div key={item.key}>{item.Body(setAnswer)}</div>
  ))
  return (
    <>
      <div className="quiz">{quests}</div>
      <button onClick={clickHandler}>Проверить</button>
    </>
  )
}
