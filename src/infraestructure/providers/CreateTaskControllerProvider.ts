import { CreateTaskController } from "../../domain/task/controllers"
import { TaskServiceFactory } from "../../domain/task/services"
import InMemoryTaskRepository from "../repositories/InMemoryTaskRepository"

const CreateTaskControllerProvider = () => ({
  dispatch: CreateTaskController.dispatch(TaskServiceFactory.createTaskService(), InMemoryTaskRepository),
})

export default CreateTaskControllerProvider
