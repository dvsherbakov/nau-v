import { EMAIL_AUTH, LOGIN_AUTH, LOGOUT_AUTH, PASSWD_AUTH } from './actionTypes'
import { SetEmailAction, AuthActionTypes, SetPasswdAction, LoginAction } from './types'

const initialState = {
  email: '',
  passwd: '123',
  isAuth: false,
  firstName: '',
  lastName: '',
  accepted: 0,
}

export default (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case LOGIN_AUTH:
      debugger
      return { ...state, isAuth: true, firstName:(action as LoginAction).payload.firstName, lastName:(action as LoginAction).payload.lastName, email: (action as LoginAction).payload.email, accepted:(action as LoginAction).payload.accepted }
    case EMAIL_AUTH:
      return { ...state, email: (action as SetEmailAction).email }
    case PASSWD_AUTH:
      return { ...state, passwd: (action as SetPasswdAction).passwd }
    case LOGOUT_AUTH:
      return { ...state, isAuth: false }
    default:
      return state
  }
}
