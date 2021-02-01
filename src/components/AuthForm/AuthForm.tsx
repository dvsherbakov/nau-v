import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { withFormik, FormikProps, Form, Field } from 'formik'
import { selectors, emailAction, passwdAction } from '../../features/auth'
import './auth.css'

// Shape of form values
interface FormValues {
  email: string;
  password: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props
  const dispatch = useDispatch()
  const email = useSelector(selectors.getEmail)
  const passwd = useSelector(selectors.getPasswd)
  const authClassName =
    errors.email || errors.password ? 'auth auth__error' : 'auth'
  return (
    <div className={authClassName}>
      <h4 className="auth__header">Авторизуйтесь:</h4>
      <Form>
        <div className="auth__group">
          <Field
            className="auth__input"
            type="email"
            name="email"
            id="email-input"
            placeholder=" "
          />
          <label htmlFor="email" className="auth__label">
            email
          </label>
          {touched.email && errors.email && <div>{errors.email}</div>}
        </div>

        <div className="auth__group">
          <Field
            className="auth__input"
            placeholder=" "
            type="password"
            name="password"
            id="password"
          />
          <label className="auth__label" htmlFor="password">
            password
          </label>
          {touched.password && errors.password && <div>{errors.password}</div>}
        </div>
        <button type="submit" disabled={isSubmitting} className="auth__button">
          Вход
        </button>
      </Form>
    </div>
  )
}

// The type of props MyForm receives
interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
}

type ValSchema = {
  email: string,
  password: string,
}

const goodPersonSchema: Yup.SchemaOf<ValSchema> = Yup.object({
  email: Yup.string().email().defined(),
  password: Yup.string().required().min(3, 'Password to short'),
}).defined()

// Wrap our form with the withFormik HoC
export const AuthForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || '',
      password: '',
    }
  },

  validationSchema: goodPersonSchema,

  handleSubmit: (values) => {
    console.dir(values)
  },
})(InnerForm)
