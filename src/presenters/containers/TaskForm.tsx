import * as React from 'react'
import { connect } from 'react-redux'
import { TaskForm as TaskFormComponent } from '../components'

class TaskForm extends React.Component {
  submitForm(event: Event) { }
  
  render() {
    const { newTask } = this.props

    return (
      <TaskFormComponent
        formData={newTask}
        submitForm={this.submitForm.bind(this)}
      />
    )
  }
}

const mapStateToProps = store => ({
  newTask: store.taskState.newTask,
})

export default connect(mapStateToProps)(TaskForm)