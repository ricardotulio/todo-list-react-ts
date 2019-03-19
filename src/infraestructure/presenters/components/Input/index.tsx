import * as React from 'react'

type Props = {
  readonly name: string
  readonly title: string
  readonly inputType: string
  readonly value: string
  readonly handleChange: (event) => any
  readonly placeholder: string
}

const Input = (props: Props) => (
  <div>
    <label htmlFor={props.name}>
      {props.title}
    </label>
    <input
      id={props.name}
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  </div>
)

export default Input