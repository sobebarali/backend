const categoryModel = require("../models/categoryModel");
const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel");
const commentModel = require("../models/commentModel");

class Blog {
  /** Possible CRUD Operation on Category */
  async addCategory(info) {
    await categoryModel.create(info);
  }

  async getAllCategory() {
    return categoryModel.find();
  }

  async updateCategory(id, updatedInfo) {
    return categoryModel.findByIdAndUpdate(id, updatedInfo);
  }

  async deleteCategory(id) {
    return categoryModel.findByIdAndDelete(id);
  }

  async searchCategory(query) {
    return categoryModel.find({ name: { $regex: query } });
  }

  async getCategoryById(id) {
    return categoryModel.findById(id);
  }

  async getCategoryByName(name) {
    return categoryModel.find({ name: name });
  }

  /** Possible CRUD Operation on Blog */
  async addBlog(info) {
    await blogModel.create(info);
  }

  async getAllBlog() {
    return blogModel.find();
  }

  async updateBlog(id, updatedInfo) {
    return blogModel.findByIdAndUpdate(id, updatedInfo);
  }

  async deleteBlog(id) {
    return blogModel.findByIdAndDelete(id);
  }

  async searchBlog(query) {
    return blogModel.find({
      $or: [{ title: { $regex: query } }, { body: { $regex: query } }],
    });
  }

  async getBlogById(id) {
    return blogModel.findById(id);
  }

  async getBlogByTitle(title) {
    return blogModel.find({ title: title });
  }

  async getBlogByCategory() {}

  /** Possible CRUD Operation on User */
  async addUser(info) {
    await userModel.create(info);
  }

  async getAllUser() {
    return userModel.find();
  }

  async updateUser(id, updatedInfo) {
    return userModel.findByIdAndUpdate(id, updatedInfo);
  }

  async deleteUser(id) {
    return userModel.findByIdAndDelete(id);
  }

  async searchUser(query) {
    return userModel.find({ name: { $regex: query } });
  }

  async getUserById(id) {
    return userModel.findById(id);
  }

  async getUserByName(name) {
    return userModel.find({ name: name });
  }

  /** All Possible CRUD Operation on comment */
  async addComment(info) {
    await commentModel.create(info);
  }

  async getAllComment() {
    return commentModel.find();
  }

  async updateComment(id, updatedInfo) {
    return commentModel.findByIdAndUpdate(id, updatedInfo);
  }

  async deleteComment(id) {
    return commentModel.findByIdAndDelete(id);
  }

  async searchComment(query) {
    return commentModel.find({ message: { $regex: query } });
  }

  async getCommentById(id) {
    return commentModel.findById(id);
  }

  async getCommentByRating(rating) {
    return commentModel.find({ rating: rating });
  }
}

module.exports = Blog;
