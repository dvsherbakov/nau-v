import React, { useState, useContext } from 'react'
import { AuthContext } from '../AuthContext'

import './register.css'

export const RegisterForm = () => {
  const [registerPressed, setPressed] = useState(false)
  const [firstName, setFName] = useState('')
  const [lastName, setLName] = useState('')
  const [email, setLogin] = useState('')
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
      const data = await jwtApi.register({
        email,
        password,
        firstName,
        lastName,
      })
      console.log(data)
      if (data === 200) {
        setToken(jwtApi.token)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const btPressedClass = registerPressed
    ? 'register__button register__pressed'
    : 'register__button'

  return (
    <div className="register">
      <h2>Зарегистрируйтесь пожалуйста:</h2>

      <div className="register__group">
        <input
          className="register__input"
          type="text"
          placeholder=" "
          onChange={(e) => {
            setFName(e.target.value)
          }}
        />
        <label className="register__label">Ваше имя</label>
      </div>

      <div className="register__group">
        <input
          className="register__input"
          type="text"
          placeholder=" "
          onChange={(e) => {
            setLName(e.target.value)
          }}
        />
        <label className="register__label">Ваша Фамилия</label>
      </div>

      <div className="register__group">
        <input
          className="register__input"
          type="text"
          placeholder=" "
          onChange={(e) => {
            setLogin(e.target.value)
          }}
        />
        <label className="register__label">email</label>
      </div>

      <div className="register__group">
        <input
          className="register__input"
          type="password"
          placeholder=" "
          onChange={(e) => {
            setPasswd(e.target.value)
          }}
        />
        <label className="register__label">password</label>
      </div>

      <button
        className={btPressedClass}
        onClick={lohinHandler}
        onMouseDown={onPress}
        onMouseUp={onUnPress}
      >
        Регистрация
      </button>
    </div>
  )
}
