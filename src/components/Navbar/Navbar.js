import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className="menu container">
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <NavLink to="/test">Пройти тест</NavLink>
        </li>
        <li>
          <NavLink to="/check">Проверочные вопросы</NavLink>
        </li>
        <li>
          <NavLink to="/">Выйти</NavLink>
        </li>
      </ul>
    </nav>
  )
}
