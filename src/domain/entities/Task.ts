enum TaskStatus {
  Open = 'open',
  Cancelled = 'cancelled',
  Done = 'done',
}

class Task {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly status: TaskStatus
}

export {
  TaskStatus,
  Task,
}