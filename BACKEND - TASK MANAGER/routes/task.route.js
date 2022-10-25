const express = require("express")
const {getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    findTask,
    findTaskByName} = require('../handlers/task.handle')

const taskRouter = express.Router()

taskRouter.route('/tasks').get(getAllTask).post(createTask)
taskRouter.route('/tasks/:id').get(getTask).patch(updateTask).delete(deleteTask)
taskRouter.route('/tasks/name/:name').get(findTaskByName)
taskRouter.route('/tasks/query/:query').get(findTask)

module.exports = taskRouter