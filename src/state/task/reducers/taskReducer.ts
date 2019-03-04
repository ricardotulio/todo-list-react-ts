const initialState = {
  newTask: {
    id: '',
    title: '',
    description: '',
    status: '',
  },
  taskList: [
    {
      id: '1',
      title: 'teste',
      description: 'teste',
      status: 'open',
    }
  ],
}

export const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'PERSIST_TASK':
      return state
    default:
      return state
  }
}