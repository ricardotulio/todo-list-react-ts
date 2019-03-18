import * as React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { assoc } from "ramda"
import { Task } from "../../../domain/task/entities"
import { persistTask } from "../../state/task/actions"
import {
  Input,
  TextArea,
  Button,
} from '../components'

type Props = {
  readonly task: Task
  readonly persistTask: (task: Task) => any
}

type State = {
  readonly task: Task
}

class TaskFormContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      task: props.task,
    }
  }

  handleInputChange(event) {
    const name = event.target.name
    const value = event.target.value

    this.setState(prevState => ({
      ...prevState,
      task: assoc(name, value, prevState.task),
    }))
  }

  handleFormSubmit(event) {
    event.preventDefault()

    const { task } = this.state
    const { persistTask } = this.props

    Promise.resolve(persistTask(task))
      .then(this.handleClearForm)
  }

  handleClearForm() {
    const emptyTask = {
      id: "",
      title: "",
      description: "",
      status: "",
    }

    this.setState(assoc("task", emptyTask))
  }

  render() {
    const { task } = this.state
  
    return (
      <form onSubmit={(event) => this.handleFormSubmit(event)}>
        <Input
          title={"Title"}
          inputType={"text"}
          name={"title"}
          value={task.title}
          handleChange={(event) => this.handleInputChange(event)}
          placeholder={"Type task title..."}
        />

        <TextArea
          title={"Description"}
          name={"description"}
          rows={5}
          value={task.description}
          handleChange={(event) => this.handleInputChange(event)}
          placeholder={"Type task description..."}
        />

        <Button title={"Save"} />
      </form>
    )
  }
}

const mapStateToProps = (store) => ({
  task: store.taskState.newTask,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ persistTask }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContainer)
