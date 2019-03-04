import { curry } from "ramda"
import { Task } from "../entities"
import { ITaskService, TaskServiceFactory } from "../services"
import { ITaskStore } from "../store"

interface ICreateTaskRequest {
  readonly title: string
  readonly description: string
}

const dispatch = curry((
  taskService: ITaskService,
  taskStore: ITaskStore,
  createTaskRequest: ICreateTaskRequest): Promise<Task> => {

  return Promise.resolve(createTaskRequest)
    .then(taskService.createTask)
    .then(taskStore.persistTask)
})

export default {
  dispatch,
}
