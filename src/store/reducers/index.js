import { combineReducers } from 'redux'
import reposReducer from './reposReducer'
import userReducer from './userReducer'

export default combineReducers({
  repos: reposReducer,
  reposPage: reposReducer,
  reposKeyword: reposReducer,
  users: userReducer,
  usersPage: userReducer,
  usersKeyword: userReducer
})