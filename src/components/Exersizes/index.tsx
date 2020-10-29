import React, { useState } from 'react'
import { ClassFilter } from '../ClassFilter/index'
import {ScrollButtons} from '../ScrollButtons/index'
import { exersizes } from './exlist'
import './styles.css'

export const Exersizes = () => {
  function onlyUnique(
    value: number | string,
    index: number,
    self: Array<number | string>
  ) {
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
      ([] as string[])
        .concat(...exersizes.map((e) => e.tags))
        .filter(onlyUnique)
        .map((el, id) => {
          return { id, tag: el, isSelected: true }
        })
  )

  const tagIsSelected = (tgs: Array<string>) => {
    const filtered = tags
      .filter((el) => tgs.includes(el.tag))
      .filter((e) => e.isSelected)
    return !!filtered.length
  }

  //ToDo add class filter
  const classIsSelected = (cls: number) => {
    const filtered = classes
      .filter((el) => cls === el.klass)
      .filter((e) => e.isSelected)
    return !!filtered.length
  }

  const resList = exersizes
    .filter((e) => classIsSelected(e.klass))
    .filter((el) => tagIsSelected(el.tags))
    .map((e) => (
      <div key={e.id} className="exersizes__unit">
        <div className="exersizes__header-container">
          <div className="exersizes__header-head">
            <div className="exersizes__header-item">
              <span className="exersizes__green-span">{e.klass}</span> класс.
            </div>
            <div className="exersizes__header-item">
              Тэги:{' '}
              <span className="exersizes__green-span">{e.tags.join(', ')}</span>
            </div>
          </div>
          <div className="exersizes__code-div">
            Шифр: <span className="exersizes__red-span">{e.id}</span>
          </div>
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
      <ScrollButtons />
    </div>
  )
}
