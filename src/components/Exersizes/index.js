import React from 'react'
import { exersizes } from './exlist'

export const Exersizes = () => {
  const resList = exersizes.map((e) => (
    <div key={e.id}>
      <div>{e.klass} класс</div>
      <div>Тэги: {e.tags.join(' ')}</div>
      <div>{e.text}</div>
    </div>
  ))
  return (
    <div>
      <h1>Задачи и упражнения</h1>
      <div>{resList}</div>
    </div>
  )
}
