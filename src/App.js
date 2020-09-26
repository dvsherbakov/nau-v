import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'

import { useRoutes } from './routes'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  const routes = useRoutes()
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
