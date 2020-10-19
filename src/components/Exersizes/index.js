import React from 'react'
import { ClassFilter } from '../ClassFilter'
import { exersizes } from './exlist'
import './styles.css'

export const Exersizes = () => {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index
  }

  const classes = exersizes.map((e) => e.klass).filter(onlyUnique)
  const tags = [].concat(...exersizes.map((e) => e.tags)).filter(onlyUnique)

  const resList = exersizes.map((e) => (
    <div key={e.id} className="exersizes__unit">
      <div className="exersizes__header-container">
        <div className="exersizes__header-head">
          <div className="exersizes__header-item">{e.klass} класс</div>
          <div className="exersizes__header-item">Тэги: {e.tags.join(' ')}</div>
        </div>
        <div>Шифр: {e.id}</div>
      </div>
      <div className="exersizes__body">{e.text}</div>
    </div>
  ))
  return (
    <div>
      <h1>Задачи и упражнения</h1>
      <ClassFilter cl={classes} tg={tags} />
      <div>{resList}</div>
    </div>
  )
}
