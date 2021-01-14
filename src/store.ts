import { combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { devToolsEnhancer } from 'redux-devtools-extension'
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

  /* preloadedState, */ devToolsEnhancer({})
)

export default store
