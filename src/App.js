import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { useRoutes } from './routes'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  const routes = useRoutes()
  return (
    <Router>
      <Navbar />
      <div>{routes}</div>
    </Router>
  )
}

export default App

//https://usehooks.com/ - Кастомные хуки
