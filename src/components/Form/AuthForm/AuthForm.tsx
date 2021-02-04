import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { authThunk } from '../../../features/auth/actions'

import '../styles/auth.css'

export interface IAuth {
  email: string;
  password: string;
}

export const AuthForm = () => {
  const dispatch = useDispatch()
  const val = localStorage.getItem('userData')
  const startVal: IAuth = val ? JSON.parse(val) : { password: '', email: '' }

  const formik = useFormik<IAuth>({
    initialValues: startVal,
    onSubmit: (values: IAuth) => {
      localStorage.setItem('userData', JSON.stringify(values, null, 2))
      dispatch(authThunk(values))
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Некорректный email')
        .required('Поле не может быть путым'),
      password: Yup.string()
        .min(3, 'Сликом короткий пароль')
        .max(20, 'Слишком длинный пароль')
        .required('Поле не может быть пустым'),
    }),
  })

  const authClassName =
    formik.errors.email || formik.errors.password ? 'auth auth__error' : 'auth'

  return (
    <div className={authClassName}>
      <h4 className="auth__header">Авторизуйтесь:</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="auth__group">
          <input
            className="auth__input"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="email" className="auth__label">
            Email:
          </label>
          {formik.errors.email ? (
            <div id="email-error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="auth__group">
          <input
            className="auth__input"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <label htmlFor="lastName" className="auth__label">
            Password:
          </label>
          {formik.errors.password && formik.touched.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" className="auth__button">
          Войти
        </button>
      </form>
    </div>
  )
}
