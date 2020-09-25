import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { QuizPage } from './pages/QuizPage'
import { CheckPage } from './pages/CheckPage'

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/test" exact>
        <QuizPage />
      </Route>
      <Route path="/check" exact>
        <CheckPage />
      </Route>
      <Redirect to="/"></Redirect>
    </Switch>
  )
}
