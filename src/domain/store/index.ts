import { Task } from "../entities";

interface TaskStoreInterface {
  findTask(id: string): Task
  persistTask(task: Task): Task
  removeTask(task: Task): boolean
}

export {
  TaskStoreInterface,
}