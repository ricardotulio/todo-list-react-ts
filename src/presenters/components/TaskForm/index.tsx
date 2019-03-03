import * as React from 'react'

class FormData {
  id: string
  title: string
  description: string
}

class Props {
  formData: any
  submitForm: Function
}

const onSubmit = (submitHandler: Function) => (event: React.FormEvent) => {
  event.preventDefault();
  submitHandler(event);
}

const TaskForm = (props: Props) => (
  <div>
    <form onSubmit={onSubmit(props.submitForm)}>
      <input type="hidden" name="id" value={props.formData.id} />
      <input type="text" name="title" value={props.formData.title} />
      <textarea name="description" value={props.formData.description}></textarea>
      <button type="submit">Save</button>
    </form>
  </div>
)

export default TaskForm