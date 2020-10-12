import React from 'react'

import './styles.css'

const upClickHandler = () => {
  window.scrollTo(0, 0)
}

const downClickHandler = () => {
  window.scrollTo(0, document.body.scrollHeight)
}

export const ScrollButtons = () => {
  return (
    <div className="scroll-buttons__container">
      <div className="scroll-buttons__button-up" onClick={upClickHandler}></div>
      <div
        className="scroll-buttons__button-down"
        onClick={downClickHandler}
      ></div>
    </div>
  )
}
