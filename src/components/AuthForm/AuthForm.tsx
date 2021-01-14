import React from 'react'
import { Field, reduxForm } from 'redux-form'
import '../Auth/auth.css'

export const AuthForm = reduxForm({
  form: 'authForm',
})((props) => {
  const { handleSubmit } = props
  return (
    <div className="container">
      <div className="auth">
        <h2>Авторизуйтесь пожалуйста:</h2>
        <form onSubmit={handleSubmit}>
          <div className="auth__group">
            <Field
              name="email"
              component="input"
              type="email"
              className="auth__input"
            />
            <label htmlFor="email" className="auth__label">
              Email
            </label>
          </div>
          <div className="auth__group">
            <Field
              name="password"
              component="input"
              type="password"
              className="auth__input"
            />
            <label htmlFor="password" className="auth__label">
              Password
            </label>
          </div>

          <button type="submit" className="auth__button">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
})
