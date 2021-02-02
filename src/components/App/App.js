import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../Header/Header.tsx'
import { AuthContext } from '../AuthContext.ts'
import { useRoutes } from '../../routes.tsx'
import { Navbar } from '../Navbar/Navbar'
import { selectors } from '../../features/auth/index'
import Api from '../../Api'

import { UserInfo } from '../UserInfo'

const jwtApi = new Api()

function App() {
  const [token, setToken] = useState('')
  const [userInfo, setUserInfo] = useState({
    firstName: 'Ошибка',
    lastName: 'Ошибка',
    email: 'nomail@mail.com',
    accepted: 0,
  })

  const isAuth = useSelector(selectors.isAuthenticate)

  useEffect(() => {
    jwtApi.changeUserInfo = setUserInfo
  }, [])

  const routes = useRoutes(isAuth)

  return (
    <AuthContext.Provider value={{ jwtApi, token, setToken }}>
      <Router>
        <Header />
        <Navbar UserInfo={userInfo} />
        <UserInfo UserInfo={userInfo} />
        <div>{routes}</div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App

//https://usehooks.com/ - Кастомные хуки
