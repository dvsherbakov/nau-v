import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import './styles.css'

export const Logout = (props) => {
  const [isRedirect, setRedirect] = useState(false)
  const clickHandler = () => {
    localStorage.removeItem('userData')
    props.jwt.logout()
    props.SetToken('')
    setRedirect(true)
  }

  return isRedirect ? (
    <Redirect to="/login" />
  ) : (
    <div className="logout" onClick={clickHandler}></div>
  )
}
