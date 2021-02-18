import { Dispatch } from 'react'
import { IFullUserInfo } from '../auth/types'
import { FAIL_USERS, SET_USERS } from './actionTypes'
import { IFailUserAction, ISetUsersAction, UsersActionTypes } from './types'
import Api from '../../Api/Api'

export const SetUsersAction = (payload: IFullUserInfo[]): ISetUsersAction => ({
  type: SET_USERS,
  payload,
})

export const FailUserAction = (): IFailUserAction => ({
  type: FAIL_USERS,
})

export const getUsersThunk = () => async (
  dispatch: Dispatch<UsersActionTypes>
) => {
  try {
    const api = new Api()
    const res = await api.GetUsers()
    dispatch(SetUsersAction(res))
  } catch (e) {
    dispatch(FailUserAction())
  }
}
