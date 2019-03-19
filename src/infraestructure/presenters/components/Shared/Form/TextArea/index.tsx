import * as React from 'react'

type Props = {
  readonly title: string
  readonly name: string
  readonly cols?: number
  readonly rows?: number
  readonly value: string
  readonly handleChange: (event) => any
  readonly placeholder: string
}

const TextArea = (props: Props) => (
  <div>
    <label>{props.title}</label>
    <textarea
      name={props.name}
      rows={props.rows}
      cols={props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  </div>
)

export default TextArea