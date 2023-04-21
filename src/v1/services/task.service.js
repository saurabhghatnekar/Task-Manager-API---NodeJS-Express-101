const TaskModel = require('../models/task.model');

// // GET /tasks: Retrieve all tasks.
// //
// // GET /tasks/:id: Retrieve a single task by its ID.

// // POST /tasks: Create a new task.
// //
// // PUT /tasks/:id: Update an existing task by its ID.
// //
// // DELETE /tasks/:id: Delete a task by its ID.

const getAllTasks = () => {
    return TaskModel.all();
}

const getTaskById = (id) => {
    //transform id to integer

    return TaskModel.find(id);
}

const createTask = (task) => {
    return TaskModel.create(task);
}

const updateTask = (id, toUpdate) => {
    return TaskModel.update(id, toUpdate);
}

const deleteTask = (id) => {
    return TaskModel.delete(id);

}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}