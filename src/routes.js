import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { QuizPage } from './pages/QuizPage.tsx'
import { CheckPage } from './pages/CheckPage.tsx'
import { AuthPage } from './pages/AuthPage.tsx'
import { RegisterPage } from './pages/RegisterPage.tsx'
import { MainPage } from './pages/MainPage.tsx'
import { LinksPage } from './pages/LinksPage.tsx'
import { UsersPage } from './pages/UsersPage.tsx'

export const useRoutes = (isAuth) => {
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
      <Redirect to="/" />
    </Switch>
  )
}
