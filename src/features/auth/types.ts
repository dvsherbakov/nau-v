import { EMAIL_AUTH, LOGIN_AUTH, LOGOUT_AUTH, PASSWD_AND_EMAIL, PASSWD_AUTH, FAIL_AUTH, MY_SUCCESS, FIRST_NAME_AUTH, LAST_NAME_AUTH } from './actionTypes'

export interface IFullUserInfo {
  firstName: string;
  lastName: string;
  email: string;
  accepted: string;
}

export interface LoginAction {
  type: typeof LOGIN_AUTH
  payload: IFullUserInfo
}

export interface SetEmailAction {
  type: typeof EMAIL_AUTH
  email: string
}

export interface SetPasswdAction {
  type: typeof PASSWD_AUTH
  passwd: string
}

export interface SetPasswdAndEmail {
  type: typeof PASSWD_AND_EMAIL
  passwd: string
  email:string
}

export type ComplexUserPayload = {
  firstName: string
  lastName: string
  middleName?: string
  email: string
}

export interface LogoutAction {
  type: typeof LOGOUT_AUTH
}

export type LoginFailAuth = {
  type: typeof FAIL_AUTH
}

export type SetFirstNameAction = {
  type: typeof FIRST_NAME_AUTH
  payload: string
}

export type SetLastNameAction = {
  type: typeof LAST_NAME_AUTH
  payload: string
}

export type MyAction = {
  type: typeof MY_SUCCESS
  payload: ComplexUserPayload
}

export type AuthActionTypes =
  | LoginAction
  | LoginFailAuth
  | LogoutAction
  | MyAction
  | SetPasswdAction
  | SetFirstNameAction
  | SetLastNameAction

export interface AuthState {
  auth: {
    email: string
    passwd: string
    isAuth: boolean
    firstName: string
    lastName: string
    accepted: number
  }
}

export interface IAuthThunk {
  email: string;
  password: string;
}
