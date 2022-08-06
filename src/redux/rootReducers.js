import { combineReducers } from 'redux'

import  userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: userReducer,
})

export default rootReducer
