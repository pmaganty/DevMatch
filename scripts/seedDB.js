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
    skills: ["react", "python", "docker", "java", "c", "linux", "hardware"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "billgates@whatever.com",
    phone: "2067778765"
  },
  {
    name: "Sarah Smith",
    skills: ["docker", "java", "c", "linux", "hardware"],
    description: "I am a smart person, I thinLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.k you should work with me and we can make something great.",
    email: "sarahsmith@gmail.com",
    phone: "5126669783"
  },
  {
    name: "Bob Barley",
    skills: ["node", "c", "docker"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "bobbarley@gmail.com",
    phone: "6666666666"
  },
  {
    name: "Barnes Noble",
    skills: ["c", "python", "docker", "linux", "hardware"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "barnesnoble@gmail.com",
    phone: "2067778765"
  },
  {
    name: "Sam Smith",
    skills: ["linux", "windows", "hardware"],
    description: "I am a smart person, I thinLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.k you should work with me and we can make something great.",
    email: "samsmith@gmail.com",
    phone: "5126669783"
  },
  {
    name: "Chris Topher",
    skills: ["node", "hardware", "html"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "christopher@gmail.com",
    phone: "6666666666"
  },
  {
    name: "Random Person",
    skills: ["c", "java", "html"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "randomperson@gmail.com",
    phone: "2067778765"
  },
  {
    name: "Curious George",
    skills: ["python", "bash", "tcl", "node", "react", "html", "docker"],
    description: "I am a smart person, I thinLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.k you should work with me and we can make something great.",
    email: "curiousgeorge@gmail.com",
    phone: "5126669783"
  },
  {
    name: "Kelly Clark",
    skills: ["node", "react", "html", "docker", "javascript", "node", "fpga"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "kellyclark@gmail.com",
    phone: "6666666666"
  },
  {
    name: "Amanda Bynes",
    skills: ["react", "python", "docker", "javascript", "node", "fpga"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "amandabynes@gmail.com",
    phone: "2067778765"
  },
  {
    name: "Ellen Degeneres",
    skills: ["react", "javascript", "node"],
    description: "I am a smart person, I thinLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.k you should work with me and we can make something great.",
    email: "ellendegeneres@gmail.com",
    phone: "5126669783"
  },
  {
    name: "Elon Musk",
    skills: ["hardware", "fpga", "python"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "elonmusk@gmail.com",
    phone: "6666666666"
  },
  {
    name: "Wally Rhines",
    skills: ["css", "python", "docker", "javascript", "node", "fpga", "python"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "wallyrhines@gmail.com",
    phone: "2067778765"
  },
  {
    name: "Cindy Too",
    skills: ["react", "javascript", "node"],
    description: "I am a smart person, I thinLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.k you should work with me and we can make something great.",
    email: "cindytoo@gmail.com",
    phone: "5126669783"
  },
  {
    name: "Candy Land",
    skills: ["node", "react", "html", "python", "docker"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "candyland@gmail.com",
    phone: "6666666666"
  },
  {
    name: "Ransom Boop",
    skills: ["react", "python", "docker"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "ransomboop@gmail.com",
    phone: "2067778765"
  },
  {
    name: "Pranitha Maganty",
    skills: ["react", "js", "bootstrap", "css", "mongodb"],
    description: "I am looking to leverage my skillset to contribute to projects that are making positive changes in the way we do things today in the world. I would like to create applications that will give users the ability to achieve what they need faster than they previously thought possible and I want to be a part of creating new solutions and change the way things are being done. I hope that my problem solving and web development skills gained from the UT Austin coding bootcamp have prepared me well to bring strength to any project.",
    email: "pranithamaganty@gmail.com",
    phone: "2064996784"
  },
  {
    name: "Aro Reyes",
    skills: ["react", "js", "bootstrap", "css", "mongodb"],
    description: "Hello world! My name is Aro Reyes and I'm an inspiring developer looking to collaborate and help you make your dream project come to life. I have a great eye for detail and believe there is always room to improve. I love designing and making websites look professional and function effectively! Feel free to press that \"Collaborate\" button and lets create something amazing.",
    email: "aroreyes@gmail.com",
    phone: "5127777777"
  },
  {
    name: "Mia Cabrera ",
    skills: ["react", "js", "bootstrap", "css", "mongodb"],
    description: "Hello my name is Mia Cabrera and I am happy to help you solve your coding issues.",
    email: "happyjoyjoy@gmail.com",
    phone: "4445556666"
  },
  {
    name: "Ash Bethal",
    skills: ["react", "js", "bootstrap", "css", "mongodb"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "ashbethala@gmail.com",
    phone: "5129999999"
  },
  {
    name: "Mauricio Gonzalez",
    skills: ["react", "js", "bootstrap", "css", "mongodb"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "mauriciogonzalez@gmail.com",
    phone: "5126666666"
  },
  
];

db.Profile
  .deleteMany({})
  .then(() => db.Profile.collection.insertMany(profileSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
