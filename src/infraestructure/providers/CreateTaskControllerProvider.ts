import { CreateTaskController } from "../../domain/task/controllers"
import { TaskServiceFactory } from "../../domain/task/services"
import taskStore from "../services/TaskStore"

const CreateTaskControllerProvider = () => ({
  dispatch: CreateTaskController.dispatch(TaskServiceFactory.createTaskService(), taskStore),
})

export default CreateTaskControllerProvider
