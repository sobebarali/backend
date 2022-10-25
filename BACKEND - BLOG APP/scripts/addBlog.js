const connectDB = require("../database/connectDB");
const categoryModel = require('../models/categoryModel')
const blogModel = require('../models/blogModel')
const { faker } = require("@faker-js/faker");
const crypto = require('crypto')

connectDB().then(addBlog);

async function addBlog() {
  let blogs = [];

  //fetching all the categories
  let categories = await categoryModel.find(); 

  for (let i = 0; i < 100; i++) {
    //selecting a random category
    let category = categories[crypto.randomInt(0, categories.length)];

    //make a blog post on that category
    const blog = {
        title: faker.name.jobTitle(),
        body: faker.lorem.sentence(),
        category_ids: [category._id]
    };

    blogs.push(blog);
  }

  await blogModel.insertMany(blogs);

  console.log("Posted few blogs in various topic")
}
