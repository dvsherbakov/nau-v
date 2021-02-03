import React from 'react'
import { useSelector } from 'react-redux'
import { selectors } from '../../features/auth/index'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../../features/auth/actions'

import './logout.css'

export const Logout = () => {
  const isAuth = useSelector(selectors.isAuthenticate)
  const dispatch = useDispatch()

  const clickHandler = () => {
    localStorage.removeItem('userData')
    dispatch(logoutAction())
  }

  return (
    <>
      {isAuth && <div className="logout" onClick={clickHandler}></div>}
      {!isAuth && null}
    </>
  )
}
