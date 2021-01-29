import { createContext } from 'react'

function nope() {}

export const AuthContext = createContext({
  jwtApi: {},
  token: null,
  setToken: nope,
})
