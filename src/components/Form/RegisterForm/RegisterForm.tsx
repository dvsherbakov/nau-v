import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../../../features/auth/actions'
import { useSelector } from 'react-redux'
import { selectors } from '../../../features/auth/index'
import { Redirect } from 'react-router-dom'

import '../styles/register.css'
import '../styles/forms.css'

export interface IRegister {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const RegisterForm = () => {
  const startVal: IRegister = {
    password: '',
    email: '',
    firstName: '',
    lastName: '',
  }
  const isRegistred = useSelector(selectors.isRegister)
  const dispatch = useDispatch()

  const formik = useFormik<IRegister>({
    initialValues: startVal,
    onSubmit: (values: IRegister) => {
      localStorage.setItem('userData', JSON.stringify(values, null, 2))
      dispatch(registerThunk(values))
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Некорректный email')
        .required('Поле не может быть путым'),
      password: Yup.string()
        .min(3, 'Сликом короткий пароль')
        .max(20, 'Слишком длинный пароль')
        .required('Поле не может быть пустым'),
      firstName: Yup.string()
        .min(2, 'Слишком короткое имя')
        .required('Поле не может быть пустым'),
      lastName: Yup.string()
        .min(2, 'Слишком короткая фамилия')
        .required('Поле не может быть пустым'),
    }),
  })

  return isRegistred ? (
    <Redirect to="/login" />
  ) : (
    <div className="register">
      <h4>Зарегистрируйтесь пожалуйста:</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="register__group">
          <input
            className={
              formik.errors.firstName && formik.touched.firstName
                ? 'register__input field__error'
                : 'register__input'
            }
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="firstName" className="register__label">
            Имя:
          </label>
          {formik.errors.firstName && formik.touched.firstName ? (
            <div id="first-name-error">{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className="register__group">
          <input
            className={
              formik.errors.lastName && formik.touched.lastName
                ? 'register__input field__error'
                : 'register__input'
            }
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="lastName" className="register__label">
            Фамилия:
          </label>
          {formik.errors.lastName && formik.touched.lastName ? (
            <div id="last-name-error">{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div className="register__group">
          <input
            className={
              formik.errors.email && formik.touched.email
                ? 'register__input field__error'
                : 'register__input'
            }
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="email" className="register__label">
            Email:
          </label>
          {formik.errors.email && formik.touched.email ? (
            <div id="email-error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="register__group">
          <input
            className={
              formik.errors.password && formik.touched.password
                ? 'register__input field__error'
                : 'register__input'
            }
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="lastName" className="register__label">
            Password:
          </label>
          {formik.errors.password && formik.touched.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" className="register__button">
          Регистрация
        </button>
      </form>
    </div>
  )
}
