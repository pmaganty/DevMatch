const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/developerProfiles", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
   }
);

const profileSeed = [
  {
    name: "Billy Bob",
    skills: ["react", "javascript", "node"],
    description: "I am a smart person, I thinLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.k you should work with me and we can make something great.",
    email: "billybob@billybob.com",
    phone: "5126669783"
  },
  {
    name: "Spongebob Squarepants",
    skills: ["node", "react", "html"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "spongebob.squarepants@krustykrab.com",
    phone: "6666666666"
  },
  {
    name: "Bill Gates",
    skills: ["react", "python", "docker"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "billgates@whatever.com",
    phone: "2067778765"
  }
];

db.Profile
  .deleteMany({})
  .then(() => db.Profile.collection.insertMany(profileSeed))
  .then(data => {
    //console.log(data);
    let curInd;
    data.ops.forEach((user, index) => {
      if (index == 0) {
        curInd = user._id;
      }

      if (index == 1) {
        db.Profile.collection.findOneAndUpdate({_id: user._id}, { $push: { collaborators: curInd } }, { new: true })
        .then(data => console.log(data))
        .catch(err => console.log(err));
      }
      //console.log(user);
    });

    // console.log(curInd);
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
