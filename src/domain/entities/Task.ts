import { prop } from 'ramda'
import { v1 as uuidv1 } from 'uuid'

enum TaskStatus {
  Open = 'open',
  Done = 'done',
  Cancelled = 'cancelled',
}

interface TaskInterface {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly status: TaskStatus

  cancel(): TaskInterface
  complete(): TaskInterface
}

class Task implements TaskInterface {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly status: TaskStatus

  constructor(
    id: string,
    title: string,
    description: string,
    status: TaskStatus = TaskStatus.Open
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.status = status
  }

  cancel(): TaskInterface {
    return new Task(this.id, this.title, this.description, TaskStatus.Cancelled)
  }

  complete(): TaskInterface {
    return new Task(this.id, this.title, this.description, TaskStatus.Done)
  }
}

interface TaskFields {
  title: string,
  description: string,
}

const createTask = (taskFeilds: TaskFields): Task => {
  const title = prop('title', taskFeilds)
  const description = prop('description', taskFeilds)
  
  return new Task(uuidv1(), title, description)
}

const TaskFactory = {
  createTask,
}

export {
  TaskStatus,
  TaskInterface,
  Task,
  TaskFactory,
}