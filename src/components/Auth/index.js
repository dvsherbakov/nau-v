import React, { useState, useContext } from 'react'
import { AuthContext } from '../AuthContext'

import './auth.css'

export const AuthForm = () => {
  const [loginPressed, setPressed] = useState(false)
  const [errorState, setError] = useState(false)
  const [email, setLogin] = useState('')
  const [password, setPasswd] = useState('')
  const { jwtApi, setToken } = useContext(AuthContext)

  const onPress = (e) => {
    setPressed(true)
  }
  const onUnPress = (e) => {
    setPressed(false)
  }

  async function loginHandler() {
    try {
      const data = await jwtApi.login({ email, password })
      if (data === 200) {
        setError(false)
        setToken(jwtApi.token)
      }
    } catch (e) {
      setError(true)
      console.log(e.message)
    }
  }

  const pressHandler = async (event) => {
    if (event.key === 'Enter') {
      loginHandler()
    }
  }

  const btPressedClass = loginPressed
    ? 'auth__button auth__pressed'
    : 'auth__button'

  const errorClass = errorState ? 'auth auth__error' : 'auth'

  return (
    <div className={errorClass}>
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
          onKeyPress={pressHandler}
          onChange={(e) => {
            setPasswd(e.target.value)
          }}
        />
        <label className="auth__label">password</label>
      </div>

      <button
        className={btPressedClass}
        onClick={loginHandler}
        onMouseDown={onPress}
        onMouseUp={onUnPress}
      >
        Войти
      </button>
    </div>
  )
}
