import axios from "axios";

export default {
  // Gets all books
  getProfile: function() {
    return axios.get("/api/profiles");
  },
  // Gets the book with the given id
  getProfile: function(id) {
    return axios.get("/api/profiles/" + id);
  },
  // Deletes the book with the given id
  deleteProfile: function(id) {
    return axios.delete("/api/profiles/" + id);
  },
  // Saves a book to the database
  saveProfile: function(profileData) {
    return axios.post("/api/profiles", profileData);
  },

  getMatch: function(skills) {
    console.log("GET MATCH");
    console.log(skills);
    return axios.get("/api/profiles/skills/" + skills);
  },

  getProfileInfo: function(email) {
    console.log(email);
    return axios.get("/api/profiles/email/" + email);
  },

  saveCollab: function(userIds) {
    console.log("INSIDE SAVE COLLAB");
    console.log(userIds);
    return axios.post("/api/profiles/collabs/", userIds);
  },

  uploadImage: function(formData) {
    axios.post( "/upload", formData);
  }

};
