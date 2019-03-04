import * as React from 'react'
import { TaskList as TaskListComponent } from '../components'

class TaskList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      taskList: [
        {
          id: '1',
          title: 'task',
          description: 'task',
          status: 'open',
        }
      ]
    }
  }

  render() {
    return (
      <TaskListComponent taskList={this.state.taskList} />
    )
  }
}

export default TaskList