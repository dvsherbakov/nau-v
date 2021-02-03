import { Dispatch } from 'react'
import {
  EMAIL_AUTH,
  PASSWD_AND_EMAIL,
  PASSWD_AUTH,
  FAIL_AUTH,
  LOGIN_AUTH,
  LOGOUT_AUTH,
  MY_AUTH,
} from './actionTypes'
import {
  IAuthThunk,
  AuthActionTypes,
  LoginFailAuth,
  LoginAction,
  IFullUserInfo,
  LogoutAction,
  MyAction,
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

export const authSuccessMy = (payload: IFullUserInfo): MyAction => ({
  type: MY_AUTH,
  payload,
})

export const authFailAction = (): LoginFailAuth => ({
  type: FAIL_AUTH,
})

export const logoutAction = (): LogoutAction => ({ type: LOGOUT_AUTH })

export const passwdAndEnailAction = (passwd: string, email: string) => ({
  type: PASSWD_AND_EMAIL,
  passwd,
  email,
})

export const authThunk = (auth: IAuthThunk) => async (
  dispatch: Dispatch<AuthActionTypes>
) => {
  try {
    const api = new Api()
    const { status, data } = await api.login(auth)
    if (status === 200) {
      localStorage.setItem(
        'tokens',
        JSON.stringify({ token: api.token, refresh: api.refreshToken })
      )
      dispatch(authSuccessAction(data))
    } else {
      dispatch(authFailAction())
    }
  } catch (e) {
    dispatch(authFailAction())
  }
}

export const myThunk = () => async (dispatch: Dispatch<AuthActionTypes>) => {
  try {
    const api = new Api()
    const { data } = await api.my()
    console.log(data)
    dispatch(authSuccessMy(data))
  } catch (e) {
    dispatch(authFailAction())
  }
}
