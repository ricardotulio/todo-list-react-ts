enum TaskStatus {
  Open = "open",
  Cancelled = "cancelled",
  Done = "done",
}

class Task {
  public readonly id: string
  public readonly title: string
  public readonly description: string
  public readonly status: TaskStatus
}

export {
  TaskStatus,
  Task,
}
