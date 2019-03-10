import * as React from "react"
import {
  applySpec,
  path,
} from "ramda"

type FormData = {
  readonly id: string
  readonly title: string
  readonly description: string
}

type Props = {
  readonly formData: FormData
  readonly handleSubmit: (event) => any
}

const dispatch = handleSubmit => event => {
  const form = path(['target', 'form', 'children'], event)

  const buildTaskFromForm = applySpec({
    id: path(['id', 'value']),
    title: path(['title', 'value']),
    description: path(['description', 'value']),
  })

  const task = buildTaskFromForm(form)
  
  handleSubmit(task)
}

const TaskForm = (props: Props) => {
  const {
    formData,
    handleSubmit,
  } = props

  return (
    <div>
      <form>
        <input type="hidden" name="id" defaultValue={formData.id} />
        <input type="text" name="title" defaultValue={formData.title} />
        <textarea name="description" defaultValue={formData.description} />
        <button type="button" onClick={dispatch(handleSubmit)}>Save</button>
      </form>
    </div>
  )
}

export default TaskForm
