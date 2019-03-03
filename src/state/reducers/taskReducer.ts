const initialState = {}

export const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SAVE_NEW_TASK':
      return {
        ...state,
        newValue: action.newValue,
      }
    default:
      return state
  }
}