import { UsersState } from './types'

export const getUsers = (state: UsersState) => state.users.users
export const isFetched = (state: UsersState) => state.users.success
