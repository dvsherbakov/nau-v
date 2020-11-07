import React, { useState } from 'react'
import './styles.css'

export const UserTestStat = (props) => {
  const [isCompact, setCompact] = useState(true)

  console.log(props)

  const wrapperClick = () => {
    setCompact(!isCompact)
  }

  if (!props || !props.result.length) return null
  if (isCompact) {
    return (
      <span className="test-stat__wrapper" onClick={wrapperClick}>
        <div className="test-stat"></div>
      </span>
    )
  } else {
    return <div className={'test-stat__container'}></div>
  }
}
