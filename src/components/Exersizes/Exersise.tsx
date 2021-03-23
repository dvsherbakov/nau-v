import React, { FC } from 'react'
import { IExersise } from './types'

export const Exersise: FC<IExersise> = ({
  id,
  element,
  text,
  klass,
  tags,
}: IExersise) => {
  return (
    <div className="exersise__cont">
      <div className="exersise">
        <div className="exersise__header">{id}</div>
        <div className="exersise__body">{element ? element : text}</div>
        <div className="exersise__footer">
          <span>{klass} класс.</span>
          <span>{tags.join(', ')}</span>
        </div>
      </div>
    </div>
  )
}
