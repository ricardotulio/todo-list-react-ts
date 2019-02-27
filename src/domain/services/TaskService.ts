import { 
  assoc,
  prop,
} from 'ramda'
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

const createTask = (taskProps: TaskProps): Task => ({
  id: uuidv1(),
  title: prop('title', taskProps),
  description: prop('description', taskProps),
  status: TaskStatus.Open,
})

const updateTaskStatus = assoc('status')

const completeTask = (task: Task): Task => updateTaskStatus(TaskStatus.Done, task)

const cancelTask = (task: Task): Task => updateTaskStatus(TaskStatus.Cancelled, task)

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