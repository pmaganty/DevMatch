const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: { type: String },
  skills: { type: String },
  description: { type: String },
  collaborators: { type: String }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
