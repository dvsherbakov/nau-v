import { Dispatch } from 'react'
import {
  EMAIL_AUTH,
  PASSWD_AND_EMAIL,
  PASSWD_AUTH,
  FAIL_AUTH,
  LOGIN_AUTH,
  LOGOUT_AUTH,
  MY_AUTH,
  FAIL_REGISTER,
  REGISTER_AUTH,
  FIRST_NAME_AUTH,
  LAST_NAME_AUTH,
} from './actionTypes'
import {
  IAuthThunk,
  AuthActionTypes,
  LoginFailAuth,
  LoginAction,
  IFullUserInfo,
  LogoutAction,
  MyAction,
  IRegisterThunk,
  RegisterFailAction,
  RegisterAction,
  RegisterUserPayload,
  FirstnameAction,
  LastNameAction,
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

export const authFirstNameAction = (payload: string): FirstnameAction => ({
  type: FIRST_NAME_AUTH,
  payload,
})

export const authLastNameAction = (payload: string): LastNameAction => ({
  type: LAST_NAME_AUTH,
  payload,
})

export const registerSuccessAction = (
  payload: RegisterUserPayload
): RegisterAction => ({
  type: REGISTER_AUTH,
  payload,
})

export const registerFailAction = (): RegisterFailAction => ({
  type: FAIL_REGISTER,
})

export const logoutAction = (): LogoutAction => ({ type: LOGOUT_AUTH })

export const passwdAndEnailAction = (passwd: string, email: string) => ({
  type: PASSWD_AND_EMAIL,
  passwd,
  email,
})

export const registerThunk = (reg: IRegisterThunk) => async (
  dispatch: Dispatch<AuthActionTypes>
) => {
  try {
    const api = new Api()
    const { status } = await api.register(reg)
    if (status === 0) {
      dispatch(registerSuccessAction(reg))
    }
  } catch (e) {
    dispatch(registerFailAction())
  }
}

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
    dispatch(authSuccessMy(data))
  } catch (e) {
    dispatch(authFailAction())
  }
}
