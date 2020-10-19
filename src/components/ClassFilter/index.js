import React from 'react'

import './style.css'

export const ClassFilter = (props) => {
  const filtress = props.cl
    ? props.cl.map((e, idx) => {
        return (
          <div key={idx} className="classfltr__item">
            {e}
          </div>
        )
      })
    : []
  const tags = props.tg
    ? props.tg.map((e, idx) => {
        return (
          <div key={idx} className="tagsfltr__item">
            {e}
          </div>
        )
      })
    : []
  if (filtress || tags)
    return (
      <div className="classfltr">
        <div className="classfltr__cl-group">{filtress}</div>
        <div className="classfltr__tg-group">{tags}</div>
      </div>
    )
  else return null
}
