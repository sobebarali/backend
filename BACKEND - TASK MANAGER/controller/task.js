const taskModel = require("../models/task.model");

class Task {
  async addTask(info) {
    await taskModel.create(info);
  }

  async getAll() {
    return taskModel.find();
  }

  async editTask(id, updatedInfo) {
    return taskModel.findByIdAndUpdate(id, updatedInfo);
  }

  async removeTask(id) {
    return taskModel.findByIdAndDelete(id);
  }

  async searchTask(query) {
    return taskModel.find({ name: { $regex: query } });
  }

  async getTaskById(id) {
    return taskModel.findById(id);
  }

  async getTaskByName(name) {
    return taskModel.find({ name: name });
  }
}

module.exports = Task;