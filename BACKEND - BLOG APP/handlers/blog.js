const Blog = require("../controller/blog");

const blog = new Blog();

async function createBlog(req, res) {
  const info = req.body;

  await blog.addBlog(info);

  res.send({
    message: "Blog has been added",
  });
}

async function allBlog(req, res) {
  try {
    const blogs = await blog.getAllBlog();

    res.status(200).send(blogs);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}

async function editBlog(req, res) {
  const id = req.params.id;

  const updatedInfo = req.body;

  await blog.updateBlog(id, updatedInfo);

  return res.status(200).send({
    message: "Category updated successfully",
  });
}

async function removeBlog(req, res) {
  const id = req.params.id;

  try {
    await blog.deleteBlog(id);

    return res.send({
      message: "Blog has been deleted",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}

async function findBlog(req, res) {
  try {
    const query = req.params.query;

    const info = await blog.searchBlog(query);

    res.status(200).send(info);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}

async function findBlogById(req, res) {
  const id = req.params.id;

  const info = await blog.getBlogById(id);

  if (info) {
    return res.send({
      data: info,
    });
  } else {
    return res.status(404).send({
      message: "Blog does not exist.",
    });
  }
}

async function findBlogByTitle(req, res) {
  const title = req.params.title;

  const info = await blog.getBlogByTitle(title);

  if (info) {
    return res.send({
      data: info,
    });
  } else {
    return res.status(404).send({
      message: "Blog does not exist.",
    });
  }
}

module.exports = {
  createBlog,
  allBlog,
  editBlog,
  removeBlog,
  findBlog,
  findBlogById,
  findBlogByTitle,
};
