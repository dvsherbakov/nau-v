import React, { useState } from 'react'
import './styles.css'

export const UserTestStat = (props) => {
  const [isCompact, setCompact] = useState(true)

  console.log(props)

  const shortData = (td) => {
    return `${td.getDate()}-${td.getMonth()}-${td.getFullYear()}`
  }

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
    const testRes = props.result.map((r, idx) => {
      const dt = r.testAt
        ? shortData(new Date(r.testAt))
        : shortData(new Date())
      return (
        <div key={idx} className="test-stat__row">
          <span>{idx}</span>
          <span>{dt}</span>
          <span>{r.results.length}</span>
        </div>
      )
    })
    return <div className="test-stat__container">{testRes}</div>
  }
}
