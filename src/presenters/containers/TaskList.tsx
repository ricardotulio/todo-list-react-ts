import * as React from 'react'
import { connect } from 'react-redux'
import { TaskList as TaskListComponent } from '../components'

class Props {}

class State {}

class TaskList extends React.Component<Props, State> {
  constructor(props: Props) {
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