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

db.Profile.find({})
.populate("collaborators")
.then(documents => {
    console.log(JSON.stringify(documents))
    process.exit(0);
})
.catch(console.log);