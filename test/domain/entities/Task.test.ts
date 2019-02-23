import {
  TaskStatus,
  Task,
  TaskFactory
} from '../../../src/domain/entities/Task';

describe('test Task entity', () => {
  const createTask = () => new Task('id', 'title', 'description')

  const taskProvider = {
    createTask,
  }

  it('must be initialized as open', () => {
    const task = taskProvider.createTask();

    expect(task.status).toEqual(TaskStatus.Open);
  })

  it('must be cancelled', () => {
    const task = taskProvider.createTask()

    expect(task.cancel().status).toEqual(TaskStatus.Cancelled)
  })

  it('must be completed', () => {
    const task = taskProvider.createTask()

    expect(task.complete().status).toEqual(TaskStatus.Done)
  })
})

describe('test TaskFactory', () => {
  it('must create a task', () => {
    const taskFields = {
      title: 'some title',
      description: 'some description',
    }

    const task = TaskFactory.createTask(taskFields)

    expect(task.id).toBeDefined()
    expect(task.title).toEqual(taskFields.title)
    expect(task.description).toEqual(taskFields.description)
  })
})