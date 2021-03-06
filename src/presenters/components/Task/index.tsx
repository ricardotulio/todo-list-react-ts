import * as React from "react"
import TaskStatus from "../TaskStatus"

type Props = {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly status: string
}

const Task = (props: Props) => (
  <div>
    <div>{props.title}</div>
    <div>{props.description}</div>
    <div><TaskStatus status={props.status} /></div>
  </div>
)

export default Task
