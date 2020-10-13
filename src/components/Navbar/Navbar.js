import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../AuthContext'

import './Navbar.css'

export const Navbar = () => {
  const { jwtApi } = useContext(AuthContext)

  if (jwtApi.isAuthenticated())
    return (
      <nav className="menu container">
        <ul id="nav-mobile" className="menu">
          <li>
            <NavLink to="/test">Пройти тест</NavLink>
          </li>
          <li>
            <NavLink to="/check">Проверочные вопросы</NavLink>
          </li>
          <li>
            <NavLink to="/links">Ссылки и справочники</NavLink>
          </li>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
        </ul>
      </nav>
    )
  else
    return (
      <nav className="menu container">
        <ul id="nav-mobile" className="menu">
          <li>
            <NavLink to="/auth">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Регистрация</NavLink>
          </li>
        </ul>
      </nav>
    )
}
