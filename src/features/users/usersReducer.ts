import { FAIL_USERS, SET_USERS } from './actionTypes'
import { UsersActionTypes, IUsersState } from './types'

const initialState: IUsersState = {
  users: [],
  success: false,
}

export default (state = initialState, action: UsersActionTypes) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload, success: true }
    case FAIL_USERS:
      return { ...state, success: false }
    default:
      return state
  }
}
