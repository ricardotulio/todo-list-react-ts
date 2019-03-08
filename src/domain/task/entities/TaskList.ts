import { Task } from "./Task"

type TaskList = {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly tasks: ReadonlyArray<Task>
}

export {
  TaskList,
}
