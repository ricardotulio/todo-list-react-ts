import { CLICK_SAVE_TASK } from './actionTypes'

export const clickSaveTaskButton = (value: any) => ({
  type: CLICK_SAVE_TASK,
  newValue: value,
})