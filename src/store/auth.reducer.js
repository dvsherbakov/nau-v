import {
  AUTH_CHANGE_AUTH_TOKEN,
  AUTH_CHANGE_EMAIL,
  AUTH_CHANGE_FIRST_NAME,
  AUTH_CHANGE_LAST_NAME,
  AUTH_CHANGE_REFRESH_TOKEN,
} from './auth.actions'

const defaultState = {
  authToken: '',
  refreshToken: '',
  firstName: '',
  lastName: '',
  email: '',
  passwd: '',
}

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_CHANGE_AUTH_TOKEN:
      return { ...state, authToken: action.payload }
    case AUTH_CHANGE_REFRESH_TOKEN:
      return { ...state, refreshToken: action.payload }
    case AUTH_CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload }
    case AUTH_CHANGE_LAST_NAME:
      return { ...state, lastName: action.payload }
    case AUTH_CHANGE_EMAIL:
      return { ...state, email: action.payload }
    default:
      return state
  }
}
