import { Dispatch } from 'react'
import { AuthActionTypes, IFullUserInfo } from '../auth/types'
import { FAIL_USERS, SET_USERS } from './actionTypes'
import { IFailUserAction, ISetUsersAction, UsersActionTypes } from './types'
import Api from '../../Api/Api'
import { authFirstNameAction } from '../auth/actions'

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

export const updateFirstName = (fName: string) => async (
  dispatch: Dispatch<AuthActionTypes>
) => {
  try {
    const api = new Api()
    const res = await api.ChangeFirstName(fName)
    if (res) dispatch(authFirstNameAction(fName))
  } catch (e) {
    console.log('error update name', e)
  }
}
