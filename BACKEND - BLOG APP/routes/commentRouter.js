const express = require("express")
const {
  createComment,
  allComment,
  editComment,
  removeComment,
  findComment,
  findCommentById,
  findCommentByRating,
} = require("../handlers/comment")

const commentRouter = express.Router()

/** Create an Comment */
commentRouter.post("/comments", createComment)

/** Get all comments **/
commentRouter.get("/comments", allComment)

/** Update an Comment */
commentRouter.patch("/comments/:id", editComment)

/** Delete an Comment */
commentRouter.delete("/comments/:id", removeComment)

/** Search a Comment **/
commentRouter.get("/comments/:query", findComment)

/** Get Comment by id */
commentRouter.get("/comments/id/:id", findCommentById)

/** Get Comment by rating */
commentRouter.get("/comments/rating/:rating", findCommentByRating)

module.exports = commentRouter
