import { PERSIST_TASK } from './actionTypes'

export const persistTask = (value: any) => ({
  type: PERSIST_TASK,
  newValue: value,
})