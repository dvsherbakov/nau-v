import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectors } from '../../features/auth/index'

export const Navbar = () => {
  const isAuth = useSelector(selectors.isAuthenticate)

  if (isAuth)
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
            <NavLink to="/pr" activeClassName="active-link">
              Профиль
            </NavLink>
          </li>
          <li>
            <NavLink to="/links" activeClassName="active-link">
              Ссылки и справочники
            </NavLink>
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
