import { Task } from "./Task"

class TaskList {
  public readonly id: string
  public readonly title: string
  public readonly description: string
  public readonly tasks: ReadonlyArray<Task>
}

export {
  TaskList,
}
