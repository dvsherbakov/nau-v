import React, { FC } from 'react'

import { TQuestion } from '../Questions/types'

export const QBody: FC<TQuestion> = () => {
  const pr = () => <div>Test div</div>
  return <div className={'container'}>PlainBody</div>
}
