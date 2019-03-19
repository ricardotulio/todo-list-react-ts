import { Task } from "../../domain/task/entities"
import { ITaskRepository } from "../../domain/task/repositories"

const findTask = (id: string): Task => {
  throw new Error("Method not implemented.")
}

const persistTask = (task: Task): Task => task

const removeTask = (task: Task): boolean => false

const TaskStore: ITaskRepository = {
  findTask,
  persistTask,
  removeTask,
}

export default TaskStore