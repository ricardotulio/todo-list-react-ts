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

const handleSubmit = submitFunction => event => {  
  event.preventDefault()

  const form = prop('target', event)

  const buildTaskFromForm = applySpec({
    id: path(['id', 'value']),
    title: path(['title', 'value']),
    description: path(['description', 'value']),
  })

  const task = buildTaskFromForm(form)
  
  submitFunction(task)
}

const TaskForm = (props) => {
  const {
    newTask,
    persistTask,
  } = props

  return (
    <TaskFormComponent
      formData={newTask}
      onSubmit={handleSubmit(persistTask)}
    />
  )
}

const mapStateToProps = (store) => ({
  newTask: store.taskState.newTask,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ persistTask: persistTask(dispatch) }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)
