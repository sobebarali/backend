const connectDB = require("../database/connectDB");
const userModel = require("../models/userModel");
const blogModel = require("../models/blogModel");
const { faker } = require("@faker-js/faker");
const crypto = require("crypto");

connectDB().then(addUser);

async function addUser() {
  let users = [];

  //fetching all the blogs
  let blogs = await blogModel.find(); 

  for (let i = 0; i < 5; i++) {

    //selecting a random blog
    let blog = blogs[crypto.randomInt(0, blogs.length)];

    const user = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      social_profile: {
        linkedIn: faker.internet.userName(),
        facebook: faker.internet.userName(),
        twiter: faker.internet.userName(),
        github: faker.internet.userName(),
        instagram: faker.internet.userName(),
      },
      addresses: [
        {
          Line1: faker.address.buildingNumber(),
          City: faker.address.city(),
          State: faker.address.state(),
          PinCode: faker.address.zipCode(),
        },
      ],
      blog_id: [blog._id],
    };

    users.push(user);
  }

  await userModel.insertMany(users);
}
