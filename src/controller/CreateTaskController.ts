import { curry } from 'ramda'
import { Task } from '../domain/entities';
import { TaskStoreInterface } from '../domain/store'
import { TaskServiceInterface, TaskServiceFactory } from '../domain/services'

class CreateTaskRequest {
  readonly title: string
  readonly description: string
}

const dispatch = curry((
  taskService: TaskServiceInterface, 
  taskStore: TaskStoreInterface,
  createTaskRequest: CreateTaskRequest): Task => {
  const task = taskService.createTask(createTaskRequest)
  
  return taskStore.persistTask(task)
})

const taskService = TaskServiceFactory.createTaskService()

const taskStore = {}

const CreateTaskControllerFactory = () => ({
  dispatch: dispatch(taskService, taskStore)
})

export default {
  dispatch,
}