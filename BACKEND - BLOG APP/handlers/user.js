const Blog = require("../controller/blog");

const blog = new Blog();

async function createUser(req, res) {
  const info = req.body;

  await blog.addUser(info);

  res.send({
    message: "User has been added",
  });
}

async function allUser(req, res) {
  try {
    const blogs = await blog.getAllUser();

    res.status(200).send(blogs);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}

async function editUser(req, res) {
  const id = req.params.id;

  const updatedInfo = req.body;

  await blog.updateUser(id, updatedInfo);

  return res.status(200).send({
    message: "User updated successfully",
  });
}
async function removeUser(req, res) {
  const id = req.params.id;

  try {
    await blog.deleteUser(id);

    return res.send({
      message: "User has been deleted",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}

async function findUser(req, res) {
  try {
    const query = req.params.query;

    const info = await blog.searchUser(query);

    res.status(200).send(info);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}

async function findUserById(req, res) {
  const id = req.params.id;

  const info = await blog.getUserById(id);

  if (info) {
    return res.send({
      data: info,
    });
  } else {
    return res.status(404).send({
      message: "User does not exist.",
    });
  }
}

async function findUserByName(req, res) {
  const name = req.params.name;

  const info = await blog.getUserByName(name);

  if (info) {
    return res.send({
      data: info,
    });
  } else {
    return res.status(404).send({
      message: "User does not exist.",
    });
  }
}

module.exports = {
  createUser,
  allUser,
  editUser,
  removeUser,
  findUser,
  findUserById,
  findUserByName,
};
