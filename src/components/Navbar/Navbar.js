import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../AuthContext'

import './Navbar.css'

export const Navbar = (props) => {
  const { jwtApi } = useContext(AuthContext)
  const { accepted } = props.UserInfo

  const userNav =
    accepted > 50 ? (
      <li>
        <NavLink to="/users" activeClassName="active-link">
          Управление пользователями
        </NavLink>
      </li>
    ) : null
  if (jwtApi.isAuthenticated())
    return (
      <nav className="menu container">
        <ul id="nav-mobile" className="menu">
          <li>
            <NavLink to="/home" activeClassName="active-link">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="/test" activeClassName="active-link">
              Пройти тест
            </NavLink>
          </li>
          <li>
            <NavLink to="/check" activeClassName="active-link">
              Проверочные вопросы
            </NavLink>
          </li>
          <li>
            <NavLink to="/links" activeClassName="active-link">
              Ссылки и справочники
            </NavLink>
          </li>

          {userNav}
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
