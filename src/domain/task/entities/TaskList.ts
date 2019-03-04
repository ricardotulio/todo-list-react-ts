import { Task } from './Task'

class TaskList {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly tasks: Array<Task>
}

export {
  TaskList,
}