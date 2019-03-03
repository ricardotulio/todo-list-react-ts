import * as React from 'react'
import { TaskForm as TaskFormComponent } from '../components'

class Props {}

export default class TaskForm extends React.Component {
  createTaskController: any

  constructor(props: Props) {
    super(props)

    this.state = {
      id: 'id',
      title: 'title',
      description: 'description',
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