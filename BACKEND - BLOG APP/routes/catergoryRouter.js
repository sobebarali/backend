const express = require("express")
const {
  createCategory,
  allCategory,
  editCategory,
  removeCategory,
  findCategory,
  findCategoryById,
  findCategoryByName,
} = require("../handlers/category")

const categoryRouter = express.Router()

/** Create an Category */
categoryRouter.post("/categories", createCategory)

/** Get all categories **/
categoryRouter.get("/categories", allCategory)

/** Update an Category */
categoryRouter.patch("/categories/:id", editCategory)

/** Delete an Category */
categoryRouter.delete("/categories/:id", removeCategory)

/** Search a Category **/
categoryRouter.get("/categories/:query", findCategory)

/** Get Category by id */
categoryRouter.get("/categories/id/:id", findCategoryById)

/** Get Category by name */
categoryRouter.get("/categories/name/:name", findCategoryByName)

module.exports = categoryRouter
