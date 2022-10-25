const express = require("express")
const {
  createBlog,
  allBlog,
  editBlog,
  removeBlog,
  findBlog,
  findBlogById,
  findBlogByTitle,
} = require("../handlers/blog")

const blogRouter = express.Router()

/** Create an Blog */
blogRouter.post("/blogs", createBlog)

/** Get all blogs **/
blogRouter.get("/blogs", allBlog)

/** Update an Blog */
blogRouter.patch("/blogs/:id", editBlog)

/** Delete an Blog */
blogRouter.delete("/blogs/:id", removeBlog)

/** Search a Blog **/
blogRouter.get("/blogs/:query", findBlog)

/** Get Blog by id */
blogRouter.get("/blogs/id/:id", findBlogById)

/** Get Blog by title */
blogRouter.get("/blogs/title/:title", findBlogByTitle)

module.exports = blogRouter
