import { append } from 'ramda'

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
    case 'PERSIST_TASK': 
      return {
        ...state,
        taskList: append(action.newTask, state.taskList),
      }
    default:
      return state
  }
}