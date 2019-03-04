import * as React from "react"
import { connect } from "react-redux"
import { TaskList as TaskListComponent } from "../components"

const TaskList = (props) => {
  const { taskList } = props

  return (
    <TaskListComponent taskList={taskList} />
  )
}

const mapStateToProps = (store) => ({
  taskList: store.taskState.taskList,
})

export default connect(mapStateToProps)(TaskList)
