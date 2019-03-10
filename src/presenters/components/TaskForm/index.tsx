import * as React from "react"

type FormData = {
  readonly id: string
  readonly title: string
  readonly description: string
}

type Props = {
  readonly formData: FormData
  readonly submitForm: () => any
}

const dispatch = (submitHandler) => (event: React.FormEvent) => {
  return submitHandler(event)
}

const TaskForm = (props: Props) => {
  const {
    formData,
    submitForm
  } = props

  return (
    <div>
      <form>
        <input type="hidden" name="id" value={formData.id} />
        <input type="text" name="title" value={formData.title} />
        <textarea name="description" value={formData.description} />
        <button type="button" onClick={dispatch(submitForm)}>Save</button>
      </form>
    </div>
  )
}

export default TaskForm
