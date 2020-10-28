import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../Header/Header'
import { AuthContext } from '../AuthContext'
import { useRoutes } from '../../routes.tsx'
import { Navbar } from '../Navbar/Navbar'
import Api from '../../Api'
import { UserInfo } from '../UserInfo'

const jwtApi = new Api()

function App(props) {
  const [token, setToken] = useState('')
  const [userInfo, setUserInfo] = useState({
    firstName: 'Ошибка',
    lastName: 'Ошибка',
    email: 'nomail@mail.com',
    accepted: 0,
  })

  useEffect(() => {
    jwtApi.changeUserInfo = setUserInfo
  }, [])

  const routes = useRoutes(!!token)

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
