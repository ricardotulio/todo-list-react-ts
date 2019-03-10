import * as React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { persistTask } from "../../state/task/actions"
import { TaskForm as TaskFormComponent } from "../components"

const TaskForm = (props) => {
  const {
    newTask,
    handleSubmit,
  } = props

  return (
    <TaskFormComponent
      formData={newTask}
      handleSubmit={handleSubmit}
    />
  )
}

const mapStateToProps = (store) => ({
  newTask: store.taskState.newTask,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ handleSubmit: persistTask(dispatch) }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)
