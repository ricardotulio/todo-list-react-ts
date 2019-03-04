import { prop } from 'ramda'
import { v1 as uuidv1 } from 'uuid'
import {
  TaskStatus,
  Task,
} from '../entities'

class TaskProps {
  title: string
  description: string
}

interface TaskServiceInterface {
  createTask(taskProps: TaskProps): Task
  completeTask(task: Task): Task
  cancelTask(task: Task): Task
}

const createTask = (taskProps: TaskProps): Task => Object.freeze({
  id: uuidv1(),
  title: prop('title', taskProps),
  description: prop('description', taskProps),
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

const createTaskService = (): TaskServiceInterface => ({
  createTask,
  completeTask,
  cancelTask,
})

const TaskServiceFactory = {
  createTaskService,
}

export {
  TaskServiceInterface,
  TaskServiceFactory,
}