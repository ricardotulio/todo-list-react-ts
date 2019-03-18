import { createTask } from "../../application/services"
import { TaskServiceFactory } from "../../domain/task/services"
import InMemoryTaskRepository from "../repositories/InMemoryTaskRepository"

const createTaskProvider = () => 
  createTask(TaskServiceFactory.createTaskService(), InMemoryTaskRepository)

export default createTaskProvider
