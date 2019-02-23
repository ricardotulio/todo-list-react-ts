enum TaskStatus {
  Open = 'open',
  Done = 'done',
  Cancelled = 'cancelled'
}

interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

interface TaskList {
  id: string;
  title: string;
  description: string;
  tasks: Array<Task>;
}

export {
  TaskStatus,
  Task,
  TaskList
}