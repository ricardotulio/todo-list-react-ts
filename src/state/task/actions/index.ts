import { TaskServiceFactory } from '../../../domain/task/services'
import { PERSIST_TASK } from './actionTypes'

const taskService = TaskServiceFactory.createTaskService()

export const persistTask = (value: any) => ({
  type: PERSIST_TASK,
  newTask: taskService.createTask(value),
})