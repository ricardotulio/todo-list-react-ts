import { taskReducer } from './taskReducer'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
  taskState: taskReducer,
})