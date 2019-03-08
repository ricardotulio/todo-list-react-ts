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

const TaskForm = (props: Props) => (
  <div>
    <form>
      <input type="hidden" name="id" value={props.formData.id} />
      <input type="text" name="title" value={props.formData.title} />
      <textarea name="description" value={props.formData.description} />
      <button type="button" onClick={dispatch(props.submitForm)}>Save</button>
    </form>
  </div>
)

export default TaskForm
