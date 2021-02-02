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
  IFullUserInfo,
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

export const authSuccessAction = (payload: IFullUserInfo): LoginAction => ({
  type: LOGIN_AUTH,
  payload,
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
    const api = new Api()
    const { status, userInfo } = await api.login(data)
    if (status === 200) {
      localStorage.setItem(
        'tokens',
        JSON.stringify({ token: api.token, refresh: api.refreshToken })
      )
      dispatch(authSuccessAction(userInfo))
    } else {
      dispatch(authFailAction())
    }
  } catch (e) {
    dispatch(authFailAction())
  }
}
