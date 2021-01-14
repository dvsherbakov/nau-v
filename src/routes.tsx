import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { QuizPage } from './pages/QuizPage'
import { CheckPage } from './pages/CheckPage'
import { AuthPage } from './pages/AuthPage'
import { RegisterPage } from './pages/RegisterPage'
import { MainPage } from './pages/MainPage'
import { HomePage } from './pages/HomePage'
import { LinksPage } from './pages/LinksPage'
import { UsersPage } from './pages/UsersPage'
import TestPage from './pages/TestPage'
import TestAuth from './pages/TestAuth'

export const useRoutes = (isAuth: boolean) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/test" exact>
          <QuizPage />
        </Route>
        <Route path="/check" exact>
          <CheckPage />
        </Route>
        <Route path="/links" exact>
          <LinksPage />
        </Route>
        <Route path="/users" exact>
          <UsersPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
        <Redirect to="/auth"></Redirect>
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Route path="/register" exact>
        <RegisterPage />
      </Route>
      <Route path="/links" exact>
        <LinksPage />
      </Route>
      <Route path="/check" exact>
        <CheckPage />
      </Route>
      <Route path="/test" exact>
        <TestPage />
      </Route>
      <Route path="/tst" exact>
        <TestAuth />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
