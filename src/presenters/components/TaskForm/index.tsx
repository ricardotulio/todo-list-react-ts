import * as React from "react"
import { assoc } from "ramda";

type State = {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly status: string
}

type Props = {
  readonly initialState: State
  readonly onSubmit: (event) => any
}

class TaskForm extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      id: props.initialState.id,
      title: props.initialState.title,
      description: props.initialState.description,
      status: props.initialState.status,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    this.setState(state => assoc(name, value, state))
  }

  handleSubmit(event, submitFunction) {
    event.preventDefault()

    submitFunction(this.state)
    this.clearForm()
  }

  clearForm() {
    this.setState({
      id: '',
      title: '',
      description: '',
      status: '',
    })
  }

  render() {
    const { onSubmit } = this.props

    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event, onSubmit)}>
          <input type="hidden" name="id" value={this.state.id} onChange={this.handleChange} />
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          <textarea name="description" value={this.state.description} onChange={this.handleChange} />
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default TaskForm
