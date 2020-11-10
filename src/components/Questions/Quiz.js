import React, { useState, useContext, useRef } from 'react'
import { AuthContext } from '../AuthContext'
import { ScrollButtons } from '../ScrollButtons/index.tsx'
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

  const clickHandler = () => {
    jwtApi.checkTest(answers.current, quests.length).then((res) => setqRes(res))
  }

  return (
    <>
      <div className="quiz">{quests}</div>

      <div className="btn-wrapper">
        <div className="wave-btn" onClick={clickHandler}>
          <span className="wave-btn__text">Проверить</span>
          <span className="wave-btn__waves"></span>
        </div>
      </div>

      <ScrollButtons />
    </>
  )
}
