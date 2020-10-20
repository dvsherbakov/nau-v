import React, { useState } from 'react'
import { ClassFilter } from '../ClassFilter'
import { exersizes } from './exlist'
import './styles.css'

export const Exersizes = () => {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index
  }

  const [classes, setClasses] = useState(
    exersizes
      .map((e) => e.klass)
      .filter(onlyUnique)
      .map((el, id) => {
        return { id, klass: el, isSelected: true }
      })
  )

  const [tags, setTags] = useState(
    []
      .concat(...exersizes.map((e) => e.tags))
      .filter(onlyUnique)
      .map((el, id) => {
        return { id, tag: el, isSelected: true }
      })
  )

  const tagIsSelected = (tgs) => {
    const filtered = tags.filter((el) => tgs.includes(el.tag))
    console.log(filtered)
    return filtered && filtered[0].isSelected
  }

  //ToDo add class filter

  const resList = exersizes
    .filter((el) => tagIsSelected(el.tags))
    .map((e) => (
      <div key={e.id} className="exersizes__unit">
        <div className="exersizes__header-container">
          <div className="exersizes__header-head">
            <div className="exersizes__header-item">{e.klass} класс</div>
            <div className="exersizes__header-item">
              Тэги: {e.tags.join(' ')}
            </div>
          </div>
          <div>Шифр: {e.id}</div>
        </div>
        <div className="exersizes__body">{e.text}</div>
      </div>
    ))
  return (
    <div>
      <h1>Задачи и упражнения</h1>
      <ClassFilter
        Classes={classes}
        SetClasses={setClasses}
        Tags={tags}
        SetTags={setTags}
      />
      <div>{resList}</div>
    </div>
  )
}
