const Blog = require("../controller/blog");

const blog = new Blog();

async function createCategory(req, res) {
  const info = req.body;

  await blog.addCategory(info);

  res.send({
    message: "Category has been added",
  });
}

async function allCategory(req, res) {
  try {
    const categories = await blog.getAllCategory();

    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}
async function editCategory(req, res) {
  const id = req.params.id;

  const updatedInfo = req.body;

  await blog.updateCategory(id, updatedInfo);

  return res.status(200).send({
    message: "Category updated successfully",
  });
}

async function removeCategory(req, res) {
  const id = req.params.id;

  try {
    await blog.deleteCategory(id);

    return res.send({
      message: "Category has been deleted",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}

async function findCategory(req, res) {
  try {
    const query = req.params.query;

    const info = await blog.searchCategory(query);

    res.status(200).send(info);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}

async function findCategoryById(req, res) {
  const id = req.params.id;

  const info = await blog.getCategoryById(id);

  if (info) {
    return res.send({
      data: info,
    });
  } else {
    return res.status(404).send({
      message: "Category does not exist.",
    });
  }
}

async function findCategoryByName(req, res) {
  const name = req.params.name;

  const info = await blog.getCategoryByName(name);

  if (info) {
    return res.send({
      data: info,
    });
  } else {
    return res.status(404).send({
      message: "Category does not exist.",
    });
  }
}

module.exports = {
  createCategory,
  allCategory,
  editCategory,
  removeCategory,
  findCategory,
  findCategoryById,
  findCategoryByName,
};
