const connectDB = require("../database/connectDB");
const userModel = require("../models/userModel");
const blogModel = require("../models/blogModel");
const likeModel = require('../models/likeModel')
const { faker } = require("@faker-js/faker");
const crypto = require("crypto");

connectDB().then(addLike);

async function addLike() {
  let likes = [];

  //fetching all the blogs
  let blogs = await blogModel.find();

  //fetching all the blogs
  let users = await userModel.find();

  for (let i = 0; i < 1000; i++) {
    //selecting a random user for linking on the blog
    let user = users[crypto.randomInt(0, users.length)];

    //selecting a random blog for liking it
    let blog = blogs[crypto.randomInt(0, blogs.length)];

    const like = {
      blog_id: [blog._id],
      user_id: [user._id],
      emoji: faker.internet.emoji()
    };

    likes.push(like);
  }

  await likeModel.insertMany(likes);
}
