import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

export const Navbar = () => {
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
          <NavLink to="/">Главная</NavLink>
        </li>
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
