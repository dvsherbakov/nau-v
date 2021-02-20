import { EMAIL_AUTH, LOGIN_AUTH, LOGOUT_AUTH, PASSWD_AND_EMAIL, PASSWD_AUTH, FAIL_AUTH, MY_SUCCESS, FIRST_NAME_AUTH, LAST_NAME_AUTH, REGISTER_AUTH, FAIL_REGISTER } from './actionTypes'

export interface IFullUserInfo {
  id?: string;
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

export interface ComplexUserPayload  {
  firstName: string
  lastName: string
  email: string
}

export interface RegisterUserPayload extends ComplexUserPayload{
  password: string;
}

export interface LogoutAction {
  type: typeof LOGOUT_AUTH
}

export type LoginFailAuth = {
  type: typeof FAIL_AUTH
}

export type RegisterAction = {
  type: typeof REGISTER_AUTH
  payload: RegisterUserPayload
}

export type RegisterFailAction ={
  type: typeof FAIL_REGISTER
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

export type FirstnameAction = {
  type: typeof FIRST_NAME_AUTH
  payload: string
}

export type LastNameAction = {
  type: typeof LAST_NAME_AUTH
  payload: string
}

export type AuthActionTypes =
  | LoginAction
  | LoginFailAuth
  | LogoutAction
  | MyAction
  | SetPasswdAction
  | SetFirstNameAction
  | SetLastNameAction
  | RegisterAction
  | FirstnameAction
  | LastNameAction

export interface AuthState {
  auth: {
    email: string
    passwd: string
    isAuth: boolean
    isRegistred?: boolean
    firstName: string
    lastName: string
    accepted: number
  }
}

export interface IAuthThunk {
  email: string;
  password: string;
}

export interface IRegisterThunk {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
