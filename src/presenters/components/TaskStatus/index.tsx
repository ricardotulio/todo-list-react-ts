import * as React from "react";

class TaskStatusProps {
  readonly status: string
}

const TaskStatus = (props: TaskStatusProps) => (
  <div>{props.status}</div>
)

export default TaskStatus