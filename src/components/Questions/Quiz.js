import React from 'react'
import { Phisics } from './Phisics'
import './Questions.css'

export default function TestQuiz() {
  const quests = Phisics.map((item) => <div key={item.key}>{item.Body()}</div>)
  return <div className="quiz">{quests}</div>
}
