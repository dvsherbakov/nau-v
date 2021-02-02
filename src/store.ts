import { combineReducers, createStore, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { CounterReducer } from './features/counter'
import { AuthReducer } from './features/auth'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  count: CounterReducer,
  auth: AuthReducer,
  form: formReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
