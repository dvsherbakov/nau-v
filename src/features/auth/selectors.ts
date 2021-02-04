import { AuthState } from './types'

export const getEmail = (state: AuthState) => state.auth.email
export const getPasswd = (state: AuthState) => state.auth.passwd
export const isAuthenticate = (state: AuthState) => state.auth.isAuth
export const getAccepted = (state: AuthState) => state.auth.accepted
export const getName = (state: AuthState) => ({
  firstName: state.auth.firstName,
  lastName: state.auth.lastName,
})
export const isRegister = (state: AuthState) => state.auth.isRegistred
