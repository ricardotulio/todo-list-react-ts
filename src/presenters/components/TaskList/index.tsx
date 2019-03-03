import * as React from 'react'
import { map } from 'ramda'
import Task from '../Task'

class Props {
  taskList: any
}

const renderTask = (task: any) => (
  <Task id={task.id}
    title={task.title}
    description={task.description}
    status={task.status}
  />
)

const TaskList = (props: Props) => (
  <div>
    {map(renderTask, props.taskList)}
  </div>
)

export default TaskList