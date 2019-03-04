import * as React from 'react'

class FormData {
  id: string
  title: string
  description: string
}

class Props {
  formData: any
  onChange: Function
  submitForm: Function
}

const dispatch = (submitHandler: Function) => (event: React.FormEvent) => {
  event.preventDefault();
  submitHandler(event);
}

const TaskForm = (props: Props) => (
  <div>
    <form onSubmit={dispatch(props.submitForm)}>
      <input type="hidden" name="id" value={props.formData.id} onChange={dispatch(props.onChange)} />
      <input type="text" name="title" value={props.formData.title} onChange={dispatch(props.onChange)} />
      <textarea name="description" value={props.formData.description} onChange={dispatch(props.onChange)}></textarea>
      <button type="submit">Save</button>
    </form>
  </div>
)

export default TaskForm