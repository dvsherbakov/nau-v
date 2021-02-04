import { EMAIL_AUTH, FAIL_AUTH, FAIL_REGISTER, LOGIN_AUTH, LOGOUT_AUTH, MY_AUTH, PASSWD_AUTH, REGISTER_AUTH } from './actionTypes'
import { SetEmailAction, AuthActionTypes, SetPasswdAction, LoginAction } from './types'

const initialState = {
  email: '',
  passwd: '123',
  isAuth: false,
  isRegistred: null,
  firstName: '',
  lastName: '',
  accepted: 0,
}

export default (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case LOGIN_AUTH:
    case MY_AUTH:
      return { ...state, isAuth: true, firstName:(action as LoginAction).payload.firstName, lastName:(action as LoginAction).payload.lastName, email: (action as LoginAction).payload.email, accepted:(action as LoginAction).payload.accepted }
    case EMAIL_AUTH:
      return { ...state, email: (action as SetEmailAction).email }
    case PASSWD_AUTH:
      return { ...state, passwd: (action as SetPasswdAction).passwd }
    case LOGOUT_AUTH:
    case FAIL_AUTH:
      return { ...state, isAuth: false }
    case FAIL_REGISTER:
       return {...state, isRegistred: false}
    case REGISTER_AUTH: 
      return {...state, isRegistred: true, firstName:(action as LoginAction).payload.firstName, lastName:(action as LoginAction).payload.lastName, email: (action as LoginAction).payload.email}  
    default:
      return state
  }
}
