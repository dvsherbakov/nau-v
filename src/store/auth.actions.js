export const AUTH_CHANGE_AUTH_TOKEN = 'AUTH_CHANGE_AUTH_TOKEN'
export const AUTH_CHANGE_REFRESH_TOKEN = 'AUTH_CHANGE_REFRESH_TOKEN'

export const AUTH_CHANGE_FIRST_NAME = 'AUTH_CHANGE_FIRST_NAME'
export const AUTH_CHANGE_LAST_NAME = 'AUTH_CHANGE_LAST_NAME'
export const AUTH_CHANGE_EMAIL = 'AUTH_CHANGE_EMAIL'

export const changeAuthToken = (token) => ({
  type: AUTH_CHANGE_AUTH_TOKEN,
  payload: token,
})

export const changeRefreshToken = (token) => ({
  type: AUTH_CHANGE_REFRESH_TOKEN,
  payload: token,
})

export const changeFirstName = (firstName) => ({
  type: AUTH_CHANGE_FIRST_NAME,
  payload: firstName,
})

export const changeLastName = (lastName) => ({
  type: AUTH_CHANGE_LAST_NAME,
  payload: lastName,
})

export const changeEmail = (email) => ({
  type: AUTH_CHANGE_EMAIL,
  payload: email,
})
