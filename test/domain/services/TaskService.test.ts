import {
  TaskServiceInterface,
  TaskServiceFactory,
} from '../../../src/domain/services'
import { TaskStatus } from '../../../src/domain/entities';

describe('test TaskService', () => {
  const taskService = TaskServiceFactory.createTaskService()

  const taskProps = {
    title: 'task',
    description: 'description',
  }

  it('must create a Task', () => {
    const task = taskService.createTask(taskProps)

    expect(task.id).toBeDefined()
    expect(task.title).toEqual(taskProps.title)
    expect(task.description).toEqual(taskProps.description)
    expect(task.status).toEqual(TaskStatus.Open)
  })

  it('must complete a Task', () => {
    const task = taskService.createTask(taskProps)
    const completedTask = taskService.completeTask(task);

    expect(completedTask.status).toEqual(TaskStatus.Done)
  })

  it('must cancel a Task', () => {
    const task = taskService.createTask(taskProps)
    const cancelledTask = taskService.cancelTask(task);

    expect(cancelledTask.status).toEqual(TaskStatus.Cancelled)
  })
})