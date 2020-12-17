import React, { FC } from 'react'
import './tooltips.css'

export interface IInputToolTips {
  tooltips: string[];
}

const InputToolTips: FC<IInputToolTips> = (props) => {
  const lst =
    props.tooltips.length === 0 ? (
      <div className="tooltips__notfound">Ничего не найдено</div>
    ) : (
      props.tooltips.map((item, index) => (
        <div key={index.toString()} className="tooltips__toolitem">
          {item}
        </div>
      ))
    )
  return <div className="tooltips">{lst}</div>
}

export { InputToolTips }
