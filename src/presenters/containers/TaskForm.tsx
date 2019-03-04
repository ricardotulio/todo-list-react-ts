import * as React from 'react'
import { TaskForm as TaskFormComponent } from '../components'

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      title: '',
      description: '',
    }
  }

  submitForm(event: Event) { }
  
  render() {
    return (
      <TaskFormComponent
        formData={this.state}
        submitForm={this.submitForm.bind(this)}
      />
    )
  }
}