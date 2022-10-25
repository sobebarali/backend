const connectDB = require("../database/connectDB");
const categoryModel = require('../models/categoryModel')
const { faker } = require("@faker-js/faker");

connectDB().then(addCategory);

async function addCategory() {
  let categories = []; 

  //we are creating 500 categories

  for (let i = 0; i < 500; i++) { 
    const category = {
      name: faker.word.adjective(),
    };

    categories.push(category);
  }

  await categoryModel.insertMany(categories);

  console.log("Added few categories to database")
}
