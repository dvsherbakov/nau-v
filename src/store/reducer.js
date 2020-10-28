import { combineReducer } from 'redux'
import { authReduser } from './auth.reducer'

export default combineReducer({
  auth: authReduser,
})
