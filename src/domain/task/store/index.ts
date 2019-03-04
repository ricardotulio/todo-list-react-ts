import { Task } from "../entities"

interface ITaskStore {
  findTask(id: string): Task|null
  persistTask(task: Task): Task
  removeTask(task: Task): boolean
}

export {
  ITaskStore,
}
