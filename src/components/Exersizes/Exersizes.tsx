import React, { FC } from 'react'
import { Exersise } from './Exersise'
import { exersises } from './ExersisesList'

export const Exersizes: FC = () => {
  return (
    <>
      <h1>Пробные задачи</h1>
      <Exersise {...exersises[0]} />
    </>
  )
}
