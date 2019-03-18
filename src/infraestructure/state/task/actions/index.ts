import { CreateTaskControllerProvider } from "../../../../providers"
import * as types from "./actionTypes"

const createTaskController = CreateTaskControllerProvider()

export const persistTask = newTask => dispatch => {
  dispatch(persistTaskInProgress)

  createTaskController.dispatch(newTask)
    .then((newTask) => dispatch(persistTaskSuccess(newTask)))
    .catch((error) => dispatch(persistTaskError(error)))
}

export const persistTaskInProgress = () => ({
  type: types.PERSIST_TASK_IN_PROGRESS,
})

export const persistTaskSuccess = (newTask) => ({
  type: types.PERSIST_TASK_SUCCESS,
  newTask,
})

export const persistTaskError = (error) => ({
  type: types.PERSIST_TASK_ERROR,
  error,
})
