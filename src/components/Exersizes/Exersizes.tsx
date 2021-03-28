import React, { FC, useState } from 'react'
import { Exersise } from './Exersise'
import { exersises } from './ExersisesList'
//import { IExersise } from './types'

export const Exersizes: FC = () => {
  const [showFilter, setShowFilter] = useState(false)

  function onlyUnique<T>(value: T, index: number, self: T[]) {
    return self.indexOf(value) === index
  }

  //var tmp: (string | number)[] = ['Все']
  const tags: string[] = ['Все']
    .concat(...exersises.map((e) => e.tags))
    .filter(onlyUnique)

  const classes: (string | number)[] = [
    ...exersises.map((e) => e.klass).sort((a, b) => a - b),
  ].filter(onlyUnique)

  const onChangeFilterVisible = () => {
    setShowFilter(!showFilter)
  }

  return (
    <div className="ex-form">
      <div className="ex-form__flex container">
        <div
          className={showFilter ? 'scroll-buttons__up' : 'scroll-buttons__down'}
          onClick={onChangeFilterVisible}
        ></div>
        {showFilter && (
          <div className="ex-form__flex">
            <select>
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <select>
              {classes.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div className="exersises">
        {exersises.map((exersise) => (
          <Exersise {...exersise} key={exersise.id} />
        ))}
      </div>
    </div>
  )
}
