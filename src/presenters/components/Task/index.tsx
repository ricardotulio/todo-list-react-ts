import * as React from "react"
import TaskStatus from "../TaskStatus"

interface IProps {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly status: string
}

const Task = (props: IProps) => (
  <div>
    <div>{props.title}</div>
    <div>{props.description}</div>
    <div><TaskStatus status={props.status} /></div>
  </div>
)

export default Task
