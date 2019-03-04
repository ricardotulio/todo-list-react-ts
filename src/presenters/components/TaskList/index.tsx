import * as React from 'react'
import { map } from 'ramda'
import Task from '../Task'

const renderTask = (task) => (
  <Task id={task.id}
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