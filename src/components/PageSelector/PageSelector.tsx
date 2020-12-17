import React, { FC } from 'react'
import { IPageSelectorProps } from './types'
import './pageSelector.css'

export const PageSelector: FC<IPageSelectorProps> = (props) => {
  const pagesCount = Math.ceil(props.total % props.count)
  const lst = Array.from(Array(pagesCount), (_, index) => index + 1).map(
    (item, index) => (
      <div
        key={index.toString()}
        className={
          item === props.current
            ? 'pageselector__item selected'
            : 'pageselector__item'
        }
        onClick={() => props.selectPage(item)}
      >
        {item}
      </div>
    )
  )

  return (
    <div className="pageselector">
      <span>Страница:</span>
      {lst}
    </div>
  )
}
