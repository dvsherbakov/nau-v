import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../Header/Header.tsx'

import { useRoutes } from '../../routes.tsx'
import { Navbar } from '../Navbar/Navbar.tsx'
import { selectors } from '../../features/auth/index'
import { useDispatch } from 'react-redux'
import { myThunk } from '../../features/auth/actions'

import Api from '../../Api/Api'

function App() {
  const dispath = useDispatch()

  useEffect(() => {
    const api = new Api()
    api.isauth().then((ia) => {
      if (ia) dispath(myThunk())
    })
  }, [dispath])

  const isAuth = useSelector(selectors.isAuthenticate)
  const routes = useRoutes(isAuth)

  return (
    <Router>
      <Header />
      <Navbar />
      <div>{routes}</div>
    </Router>
  )
}

export default App

//https://usehooks.com/ - Кастомные хуки
