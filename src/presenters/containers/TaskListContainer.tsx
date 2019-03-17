import * as React from "react"
import { connect } from "react-redux"
import { TaskList } from "../components"

const TaskListContainer = (props) => {
  const { taskList } = props

  return (
    <TaskList taskList={taskList} />
  )
}

const mapStateToProps = (store) => ({
  taskList: store.taskState.taskList,
})

export default connect(mapStateToProps)(TaskListContainer)
