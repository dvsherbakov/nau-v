import React, { useContext } from 'react'
import { Logout } from '../Logout'
import { AuthContext } from '../AuthContext'

import './styles.css'

export const UserInfo = () => {
  const { jwtApi, setToken } = useContext(AuthContext)
  if (jwtApi.isAuthenticated())
    return (
      <div className="user-info">
        <div className="user-info__main">
          <div id="username" className="user-info__item">
            Имя Фамилия
          </div>
          <div id="email" className="user-info__item">
            email
          </div>
        </div>
        <Logout jwt={jwtApi} SetToken={setToken} />
      </div>
    )
  else return <></>
}
