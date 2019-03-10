import * as React from "react"

type FormData = {
  readonly id: string
  readonly title: string
  readonly description: string
}

type Props = {
  readonly formData: FormData
  readonly onSubmit: (event) => any
}

const TaskForm = (props: Props) => {
  const {
    formData,
    onSubmit,
  } = props

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="hidden" name="id" defaultValue={formData.id} />
        <input type="text" name="title" defaultValue={formData.title} />
        <textarea name="description" defaultValue={formData.description} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default TaskForm
