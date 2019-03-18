import * as React from "react"

type Props = {
  readonly title: string
  readonly onClick: () => any
}

const Button = props => (
  <button onClick={props.action}>
    {props.title}
  </button>
)

export default Button