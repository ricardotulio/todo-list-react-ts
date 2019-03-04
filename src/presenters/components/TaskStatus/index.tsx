import * as React from "react"

interface IProps {
  readonly status: string
}

const TaskStatus = (props: IProps) => (
  <div>{props.status}</div>
)

export default TaskStatus
