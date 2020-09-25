import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
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
