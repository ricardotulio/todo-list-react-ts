import { map } from "ramda"
import * as React from "react"
import Task from "../Task"

const renderTask = (task) => (
  <Task key={task.id}
    id={task.id}
    title={task.title}
    description={task.description}
    status={task.status}
  />
)

const TaskList = (props) => (
  <div>
    {map(renderTask, props.taskList)}
  </div>
)

export default TaskList
