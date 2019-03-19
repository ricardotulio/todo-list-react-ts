import { Task } from "../entities"

interface ITaskRepository {
  findTask(id: string): Task|null
  persistTask(task: Task): Task
  removeTask(task: Task): boolean
}

export {
  ITaskRepository,
}
