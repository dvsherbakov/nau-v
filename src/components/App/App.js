import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../Header/Header.tsx'
import { AuthContext } from '../AuthContext.ts'
import { useRoutes } from '../../routes.tsx'
import { Navbar } from '../Navbar/Navbar.tsx'
import { selectors } from '../../features/auth/index'
import Api from '../../Api'

const jwtApi = new Api()

function App() {
  const [token, setToken] = useState('')

  const isAuth = useSelector(selectors.isAuthenticate)

  const routes = useRoutes(isAuth)

  return (
    <AuthContext.Provider value={{ jwtApi, token, setToken }}>
      <Router>
        <Header />
        <Navbar />
        <div>{routes}</div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App

//https://usehooks.com/ - Кастомные хуки
