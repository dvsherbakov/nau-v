import React, { FC } from 'react'
import { IExersise } from './types'

export const Exersise: FC<IExersise> = ({ id }: IExersise) => {
  return <div>{id}</div>
}
