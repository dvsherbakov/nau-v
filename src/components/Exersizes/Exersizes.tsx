import React, { FC } from 'react'
import { Exersise } from './Exersise'
import { exersises } from './ExersisesList'

export const Exersizes: FC = () => {
  return (
    <div className="exersises">
      {exersises.map((exersise) => (
        <Exersise {...exersise} />
      ))}
    </div>
  )
}
