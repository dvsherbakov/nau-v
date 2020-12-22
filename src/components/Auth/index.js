import React, { useState, useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../AuthContext'
import './auth.css'

export const AuthForm = () => {
  const [errorState, setError] = useState(false)
  const [email, setLogin] = useState('')
  const [password, setPasswd] = useState('')
  const rfLogin = useRef(null)
  const rfPasswd = useRef(null)
  const { jwtApi, setToken } = useContext(AuthContext)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'))
    if (data && data.email && data.password) {
      rfLogin.current.value = data.email
      rfPasswd.current.value = data.password
      setPasswd(data.password)
      setLogin(data.email)
    } else {
      console.log('storage empty')
    }
    return () => {
      // returned function will be called on component unmount
      console.log('unMoutn Authform')
    }
  }, [])

  async function loginHandler() {
    try {
      const data = await jwtApi.login({ email, password })
      if (data === 200) {
        setError(false)
        localStorage.setItem('userData', JSON.stringify({ email, password }))
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
          ref={rfLogin}
        />
        <label className="auth__label">email</label>
      </div>

      <div className="auth__group">
        <input
          className="auth__input"
          type="password"
          placeholder=" "
          ref={rfPasswd}
          onKeyPress={pressHandler}
          onChange={(e) => {
            setPasswd(e.target.value)
          }}
        />
        <label className="auth__label">password</label>
      </div>

      <button className={'auth__button'} onClick={loginHandler}>
        Войти
      </button>
    </div>
  )
}
