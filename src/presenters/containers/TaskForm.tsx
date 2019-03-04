import * as React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { persistTask } from "../../state/task/actions"
import { TaskForm as TaskFormComponent } from "../components"

const TaskForm = (props) => {
  const {
    newTask,
    persistTask,
  } = props

  return (
    <TaskFormComponent
      formData={newTask}
      submitForm={persistTask}
    />
  )
}

const mapStateToProps = (store) => ({
  newTask: store.taskState.newTask,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ persistTask }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)
