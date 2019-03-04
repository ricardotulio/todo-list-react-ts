import * as React from 'react'
import { connect } from 'react-redux'
import { persistTask } from '../../state/task/actions'
import { TaskForm as TaskFormComponent } from '../components'

class TaskForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newTask: props.newTask,
    }

    this.clearForm = this.clearForm.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.persist = this.persist.bind(this)
  }

  clearForm() {
    this.setState({
      newTask: {
        id: '',
        title: '',
        description: '',
        status: '',
      }
    })
  }

  inputChange(event) {
    const name = event.target.name
    const value = event.target.value

    this.setState(state => ({
      newTask: {
        ...state.newTask,
        [name]: value,
      }
    }))
  }

  persist() {
    const { persistTask } = this.props

    persistTask(this.state.newTask)
    this.clearForm()
  }

  render() {
    const { persistTask } = this.props

    return (
      <TaskFormComponent
        formData={this.state.newTask}
        onChange={this.inputChange}
        submitForm={this.persist}
      />
    )
  }
}

const mapStateToProps = store => ({
  newTask: store.taskState.newTask,
})

const mapDispatchToProps = dispatch => ({
  persistTask: (newTask) => dispatch(persistTask(dispatch, newTask))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)