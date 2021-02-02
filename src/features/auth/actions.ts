import { Dispatch } from 'react'
import {
  EMAIL_AUTH,
  PASSWD_AND_EMAIL,
  PASSWD_AUTH,
  FAIL_AUTH,
  LOGIN_AUTH,
} from './actionTypes'
import {
  IAuthThunk,
  AuthActionTypes,
  LoginFailAuth,
  LoginAction,
} from './types'
import Api from '../../Api/Api'

export const emailAction = (email: string) => ({
  type: EMAIL_AUTH,
  email,
})

export const passwdAction = (passwd: string) => ({
  type: PASSWD_AUTH,
  passwd,
})

export const authSuccessAction = (): LoginAction => ({
  type: LOGIN_AUTH,
})

export const authFailAction = (): LoginFailAuth => ({
  type: FAIL_AUTH,
})

export const passwdAndEnailAction = (passwd: string, email: string) => ({
  type: PASSWD_AND_EMAIL,
  passwd,
  email,
})

export const authThunk = (data: IAuthThunk) => async (
  dispatch: Dispatch<AuthActionTypes>
) => {
  try {
    debugger
    const api = new Api()
    const resp = await api.login(data)
    console.log(resp)
    if (resp === 200) {
      localStorage.setItem(
        'tokens',
        JSON.stringify({ token: api.token, refresh: api.refreshToken })
      )
      dispatch(authSuccessAction())
    } else {
      dispatch(authFailAction())
    }
  } catch (e) {
    dispatch(authFailAction())
  }
}
