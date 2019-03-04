const initialState = {}

export const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'PERSIST_TASK':
      return {
        ...state,
        newValue: action.newValue,
      }
    default:
      return state
  }
}