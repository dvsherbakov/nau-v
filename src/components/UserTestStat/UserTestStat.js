import React from 'react'

export const UserTestStat = (props) => {
  console.log(props)

  if (!props || !props.result.length) return null
  return (
    <span className="test-stat__wrapper">
      <div className="test-stat"></div>
    </span>
  )
}
