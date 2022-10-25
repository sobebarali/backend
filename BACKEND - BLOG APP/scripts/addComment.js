const connectDB = require("../database/connectDB");
const userModel = require("../models/userModel");
const blogModel = require("../models/blogModel");
const commentModel = require("../models/commentModel");
const { faker } = require("@faker-js/faker");
const crypto = require("crypto");

connectDB().then(addComment);

async function addComment() {
  let comments = [];

  //fetching all the blogs
  let blogs = await blogModel.find();

  //fetching all the blogs
  let users = await userModel.find();

  for (let i = 0; i < 100; i++) {
    //selecting a random blog for making a comment
    let blog = blogs[crypto.randomInt(0, blogs.length)];

    //selecting a random user for commenting on the blog
    let user = users[crypto.randomInt(0, users.length)];

    const comment = {
      blog_id: [blog._id],
      user_id: [user._id],
      message: faker.lorem.sentence(),
      rating: crypto.randomInt(1, 10)
    };

    comments.push(comment);
  }

  await commentModel.insertMany(comments);
}
