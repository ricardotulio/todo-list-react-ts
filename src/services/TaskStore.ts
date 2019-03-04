import { Task } from '../domain/task/entities'
import { TaskStoreInterface } from '../domain/task/store';

const findTask = (id: string): Task => {
  throw new Error("Method not implemented.")
}

const persistTask = (task: Task): Task => task

const removeTask = (task: Task): boolean => false

const TaskStore: TaskStoreInterface = {
  findTask,
  persistTask,
  removeTask,
}

export default TaskStore