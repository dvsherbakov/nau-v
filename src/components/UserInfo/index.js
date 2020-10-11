import React, { useContext } from 'react'
import { Logout } from '../Logout'
import { AuthContext } from '../AuthContext'

import './styles.css'

export const UserInfo = () => {
  const { jwtApi, setToken } = useContext(AuthContext)
  const { email, firstName, lastName } = jwtApi
  console.log(jwtApi)
  if (jwtApi.isAuthenticated())
    return (
      <div className="user-info">
        <div className="user-info__main">
          <span id="username" className="user-info__item">
            {firstName}
          </span>
          <span id="lastname" className="user-info__item">
            {lastName}
          </span>
          <div id="email" className="user-info__item">
            {email}
          </div>
        </div>
        <Logout jwt={jwtApi} SetToken={setToken} />
      </div>
    )
  else return <></>
}
