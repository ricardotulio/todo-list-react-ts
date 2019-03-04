import { append } from 'ramda'
import  * as types from '../actions/actionTypes'

const initialState = {
  newTask: {
    id: '',
    title: '',
    description: '',
    status: '',
  },
  taskList: [],
}

export const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.PERSIST_TASK_SUCCESS: 
      return {
        ...state,
        taskList: append(action.newTask, state.taskList),
      }
    default:
      return state
  }
}