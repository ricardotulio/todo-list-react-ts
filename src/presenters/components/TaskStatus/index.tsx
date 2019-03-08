import * as React from "react"

type Props = {
  readonly status: string
}

const TaskStatus = (props: Props) => (
  <div>{props.status}</div>
)

export default TaskStatus
