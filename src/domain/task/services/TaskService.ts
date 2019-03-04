import { prop } from "ramda"
import { v1 as uuidv1 } from "uuid"
import {
  Task,
  TaskStatus,
} from "../entities"

interface ITaskProps {
  readonly description: string
  readonly title: string
}

interface ITaskService {
  createTask(taskProps: ITaskProps): Task
  completeTask(task: Task): Task
  cancelTask(task: Task): Task
}

const createTask = (taskProps: ITaskProps): Task => Object.freeze({
  description: prop("description", taskProps),
  id: uuidv1(),
  title: prop("title", taskProps),
  status: TaskStatus.Open,
})

const completeTask = (task: Task): Task => Object.freeze({
  ...task,
  status: TaskStatus.Done,
})

const cancelTask = (task: Task): Task => Object.freeze({
  ...task,
  status: TaskStatus.Cancelled,
})

const createTaskService = (): ITaskService => ({
  cancelTask,
  completeTask,
  createTask,
})

const TaskServiceFactory = {
  createTaskService,
}

export {
  ITaskService,
  TaskServiceFactory,
}
