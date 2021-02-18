import { type } from 'os'
import { IFullUserInfo } from '../auth/types'
import { FAIL_USERS, SET_USERS } from './actionTypes'

export interface ISetUsersAction {
  type: typeof SET_USERS;
  payload: IFullUserInfo[];
}

export interface IFailUserAction {
  type: typeof FAIL_USERS;
}

export type UsersActionTypes = ISetUsersAction | IFailUserAction

export interface IUsersState {
  users: IFullUserInfo[];
  success: boolean;
}

export interface UsersState {
  users: IUsersState;
}
