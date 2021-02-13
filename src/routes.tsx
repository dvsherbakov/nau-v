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
import TestAuth from './pages/TestAuth'
import { ProfilePage } from './pages/ProfilePage'

export const useRoutes = (isAuth: boolean) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/pr" component={ProfilePage} exact>
          <ProfilePage />
        </Route>
        <Route path="/test" component={QuizPage} exact />

        <Route path="/check" exact>
          <CheckPage />
        </Route>
        <Route path="/links" exact>
          <LinksPage />
        </Route>
        <Route path="/users" exact>
          <UsersPage />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/" exaxt>
          <MainPage />
        </Route>
        <Redirect to="/auth"></Redirect>
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path="/register" exact>
        <RegisterPage />
      </Route>
      <Route path="/links" exact>
        <LinksPage />
      </Route>
      <Route path="/check" exact>
        <CheckPage />
      </Route>

      <Route path="/tst" exact>
        <TestAuth />
      </Route>
      <Route path="/" exact>
        <AuthPage />
      </Route>
    </Switch>
  )
}
