import { curry } from "ramda"
import { Task } from "../entities"
import { ITaskService, TaskServiceFactory } from "../services"
import { ITaskStore } from "../store"

type CreateTaskRequest = {
  readonly title: string
  readonly description: string
}

const dispatch = curry((
  taskService: ITaskService,
  taskStore: ITaskStore,
  createTaskRequest: CreateTaskRequest): any => {

  return Promise.resolve(createTaskRequest)
    .then(taskService.createTask)
    .then(taskStore.persistTask)
})

export default {
  dispatch,
}
