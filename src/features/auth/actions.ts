import { Dispatch, useContext } from 'react'
import {
  EMAIL_AUTH,
  PASSWD_AND_EMAIL,
  PASSWD_AUTH,
  FAIL_AUTH,
} from './actionTypes'
import { IAuthThunk, AuthActionTypes, LoginFailAuth } from './types'
import { AuthContext } from '../../components/AuthContext'

export const emailAction = (email: string) => ({
  type: EMAIL_AUTH,
  email,
})

export const passwdAction = (passwd: string) => ({
  type: PASSWD_AUTH,
  passwd,
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
    const { jwtApi } = useContext<any>(AuthContext)
    const resp = await jwtApi.login(data)
    console.log(resp)
  } catch (e) {
    dispatch(authFailAction())
  }
}
