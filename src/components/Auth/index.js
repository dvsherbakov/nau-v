import React, { useState, useContext } from 'react'
import { AuthContext } from '../AuthContext'

import './auth.css'

export const AuthForm = () => {
  const [loginPressed, setPressed] = useState(false)

  const [login, setLogin] = useState('')
  const [password, setPasswd] = useState('')
  const { jwtApi, setToken } = useContext(AuthContext)

  const onPress = (e) => {
    setPressed(true)
  }
  const onUnPress = (e) => {
    setPressed(false)
  }

  const lohinHandler = async () => {
    try {
      const data = await jwtApi.login({ login, password })
      console.log(data)
      if (data === 200) {
        setToken(jwtApi.token)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const btPressedClass = loginPressed
    ? 'auth__button auth__pressed'
    : 'auth__button'

  return (
    <div className="auth">
      <h2>Авторизуйтесь пожалуйста:</h2>

      <div className="auth__group">
        <input
          className="auth__input"
          type="text"
          placeholder=" "
          onChange={(e) => {
            setLogin(e.target.value)
          }}
        />
        <label className="auth__label">email</label>
      </div>

      <div className="auth__group">
        <input
          className="auth__input"
          type="password"
          placeholder=" "
          onChange={(e) => {
            setPasswd(e.target.value)
          }}
        />
        <label className="auth__label">password</label>
      </div>

      <button
        className={btPressedClass}
        onClick={lohinHandler}
        onMouseDown={onPress}
        onMouseUp={onUnPress}
      >
        Войти
      </button>
    </div>
  )
}
