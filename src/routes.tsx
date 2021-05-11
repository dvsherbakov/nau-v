import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { QuizPage } from './pages/QuizPage'
import { CheckPage } from './pages/CheckPage'
import { AuthPage } from './pages/AuthPage'
import { RegisterPage } from './pages/RegisterPage'
import { MainPage } from './pages/MainPage'
import { HomePage } from './pages/HomePage'
import { LinksPage } from './pages/LinksPage'
import { ProfilePage } from './pages/ProfilePage'
import TestPage from './pages/TestPage'

export const useRoutes = (isAuth: boolean) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/pr" component={ProfilePage} exact />

        <Route path="/test" component={QuizPage} exact />

        <Route path="/check" component={CheckPage} exact />

        <Route path="/links" component={LinksPage} exact />

        <Route path="/home" component={HomePage} exact />

        <Route path="/probe" exact>
          <TestPage />
        </Route>

        <Route path="/" exact>
          <MainPage />
        </Route>
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

      <Route path="/probe" exact>
        <TestPage />
      </Route>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Route path="/auth" exact>
        <AuthPage />
      </Route>
    </Switch>
  )
}
