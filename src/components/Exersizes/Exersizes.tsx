import React, { FC } from 'react'
import { Exersise } from './Exersise'
import { exersises } from './ExersisesList'
//import { IExersise } from './types'

export const Exersizes: FC = () => {
  function onlyUnique<T>(value: T, index: number, self: T[]) {
    return self.indexOf(value) === index
  }

  // var tmp: string[] = []
  const tags: string[] = ['Все']
    .concat(...exersises.map((e) => e.tags))
    .filter(onlyUnique)

  const classes: string[] = ['Все']
    .concat(...exersises.map((e) => e.klass.toString()))
    .filter(onlyUnique)

  return (
    <div className="ex-form">
      <div className="ex-form__flex container">
        <select>
          {tags.map((tag) => (
            <option value={tag}>{tag}</option>
          ))}
        </select>
        <select>
          {classes.map((tag) => (
            <option value={tag}>{tag}</option>
          ))}
        </select>
      </div>
      <div className="exersises">
        {exersises.map((exersise) => (
          <Exersise {...exersise} />
        ))}
      </div>
    </div>
  )
}
