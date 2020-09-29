import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import { AuthContext } from './components/AuthContext'
import { useRoutes } from './routes'
import { Navbar } from './components/Navbar/Navbar'
import Api from './Api'

const jwtApi = new Api()

function App() {
  const [token, setToken] = useState('')
  const routes = useRoutes(!!token)

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
