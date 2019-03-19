import { combineReducers } from "redux"
import { reducers as taskReducers } from "./task/reducers"

export const reducers = combineReducers(taskReducers)
