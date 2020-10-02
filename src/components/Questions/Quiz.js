import React, { useState, useContext, useRef } from 'react'
import { AuthContext } from '../AuthContext'
import { Phisics } from './Phisics'
import './Questions.css'

export default function TestQuiz() {
  const { jwtApi } = useContext(AuthContext)
  const [qRes, setqRes] = useState({})
  const answers = useRef({})

  const setAnswer = (id, res) => {
    const obj = {}
    obj[id] = res
    answers.current = { ...answers.current, ...obj }
  }

  const clickHandler = () => {
    jwtApi.checkTest(answers.current).then((res) => setqRes(res))
  }

  const quests = Phisics.map((item) => {
    let style = ''
    if (qRes && item.key in qRes) {
      const res = qRes[item.key]
      if (res === 1) style = 'quest__container__green'
      else if (res === 0) style = 'quest__container__red'
      else style = 'quest__container__yellow'
    }
    return (
      <div key={item.key} id={item.key} className={style}>
        {item.Body(setAnswer)}
      </div>
    )
  })

  return (
    <>
      <div className="quiz">{quests}</div>
      <button onClick={clickHandler}>Проверить</button>
    </>
  )
}
