const express = require("express")
const {
  createUser,
  allUser,
  editUser,
  removeUser,
  findUser,
  findUserById,
  findUserByName,
} = require("../handlers/user")

const userRouter = express.Router()

/** Create an User */
userRouter.post("/users", createUser)

/** Get all users **/
userRouter.get("/users", allUser)

/** Update an User */
userRouter.patch("/users/:id", editUser)

/** Delete an User */
userRouter.delete("/users/:id", removeUser)

/** Search a User **/
userRouter.get("/users/:query", findUser)

/** Get User by id */
userRouter.get("/users/id/:id", findUserById)

/** Get User by name */
userRouter.get("/users/name/:name", findUserByName)

module.exports = userRouter
