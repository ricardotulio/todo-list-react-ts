import { curry } from "ramda"
import { Task } from "../../domain/task/entities"
import { ITaskService, TaskServiceFactory } from "../../domain/task/services"
import { ITaskRepository } from "../../domain/task/repositories"

type CreateTaskRequest = {
  readonly title: string
  readonly description: string
}

const createTask = curry((
  taskService: ITaskService,
  taskStore: ITaskRepository,
  createTaskRequest: CreateTaskRequest): any => {

  return Promise.resolve(createTaskRequest)
    .then(taskService.createTask)
    .then(taskStore.persistTask)
})

export default createTask