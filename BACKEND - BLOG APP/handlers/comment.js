const Blog = require("../controller/blog");

const blog = new Blog();

async function createComment(req, res) {
  const info = req.body;

  await blog.addComment(info);

  res.send({
    message: "Comment has been added",
  });
}

async function allComment(req, res) {
  try {
    const blogs = await blog.getAllComment();

    res.status(200).send(blogs);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}

async function editComment(req, res) {
  const id = req.params.id;

  const updatedInfo = req.body;

  await blog.updateComment(id, updatedInfo);

  return res.status(200).send({
    message: "Comment updated successfully",
  });
}

async function removeComment(req, res) {
  const id = req.params.id;

  try {
    await blog.deleteComment(id);

    return res.send({
      message: "Comment has been deleted",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}

async function findComment(req, res) {
  try {
    const query = req.params.query;

    const info = await blog.searchComment(query);

    res.status(200).send(info);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}

async function findCommentById(req, res) {
  const id = req.params.id;

  const info = await blog.getCommentById(id);

  if (info) {
    return res.send({
      data: info,
    });
  } else {
    return res.status(404).send({
      message: "Comment does not exist.",
    });
  }
}

async function findCommentByRating(req, res) {
  const name = req.params.name;

  const info = await blog.getCommentByRating(name);

  if (info) {
    return res.send({
      data: info,
    });
  } else {
    return res.status(404).send({
      message: "Comment does not exist.",
    });
  }
}

module.exports = {
  createComment,
  allComment,
  editComment,
  removeComment,
  findComment,
  findCommentById,
  findCommentByRating,
};
