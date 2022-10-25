const fs = require("fs")

class Post {
  constructor() {
    this.path = "posts.json"

    const content = fs.readFileSync(this.path, {
      encoding: "utf-8",
    })

    this.data = JSON.parse(content)
  }

  savePost() {
    const content = JSON.stringify(this.data, null, 2)

    fs.writeFileSync(this.path, content, {
      encoding: "utf-8",
    })
  }

   addPost(info) {
    let id = 1

    const posts = this.data.posts

    posts.forEach((post) => {
      if (id <= post.id) {
        id = post.id + 1
      }
    })

    info.id = id

    posts.push(info)

    this.savePost()
  }

  updatePost(id,updatedInfo) {
    const posts = this.data.posts

    let index = null

    posts.find((post, idx) => {
      if (post.id === id) {
        index = idx
      }

      return post.id === id
    })

    if (index == -1) {
      return res.status(404).send({
        message: "post not found"
      })
    }

    let post = this.data.posts[index]

    post = {
        ...post, 
        ...updatedInfo, 
    }

    this.data.posts[index] = post;

    this.savePost()

    return post;
  }

  deletePost(id) {
    let index = null

    const posts = this.data.posts

    posts.find((post, idx) => {
      if (post.id === id) {
        index = idx
      }

      return post.id === id
    })

    if (index === null) {
      throw new Error("Post does not exist")
    }

    posts.splice(index, 1)

    this.data.posts = posts

    this.savePost()
  }

   getAll() {
    const posts = this.data.posts

    return posts
  }

   getById(id) {
    const posts = this.data.posts

    const post = posts.find((post) => post.id === id)

    return post
  }
}

module.exports = Post
