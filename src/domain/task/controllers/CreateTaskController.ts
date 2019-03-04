import { curry } from 'ramda'
import { Task } from '../entities';
import { TaskStoreInterface } from '../store'
import { TaskServiceInterface, TaskServiceFactory } from '../services'

class CreateTaskRequest {
  readonly title: string
  readonly description: string
}

const dispatch = curry((
  taskService: TaskServiceInterface, 
  taskStore: TaskStoreInterface,
  createTaskRequest: CreateTaskRequest): Promise<Task> => {

  return Promise.resolve(createTaskRequest)
    .then(taskService.createTask)
    .then(taskStore.persistTask)
})

export default {
  dispatch,
}