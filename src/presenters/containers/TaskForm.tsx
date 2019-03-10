import * as React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  applySpec,
  path,
  prop,
} from "ramda"
import { persistTask } from "../../state/task/actions"
import { TaskForm as TaskFormComponent } from "../components"

const TaskForm = (props) => {
  const {
    newTask,
    persistTask,
  } = props

  return (
    <TaskFormComponent
      initialState={newTask}
      onSubmit={persistTask}
    />
  )
}

const mapStateToProps = (store) => ({
  newTask: store.taskState.newTask,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ persistTask }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)
