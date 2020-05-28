import axios from "axios";

export default {
  // Gets all profiles
  getProfile: function() {
    return axios.get("/api/profiles");
  },
  // // Gets the profile with the given id
  // getProfile: function(id) {
  //   return axios.get("/api/profiles/" + id);
  // },
  // Deletes the profile with the given id
  deleteProfile: function(id) {
    return axios.delete("/api/profiles/" + id);
  },
  // Saves a profile to the database
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

  saveCollabRequest: function(userIds) {
    console.log("INSIDE SAVE COLLAB REQUEST");
    console.log(userIds);
    return axios.post("/api/profiles/request/", userIds);
  },

  uploadImage: function(formData) {
    axios.post( "/upload", formData);
  },

  removeRequests: function(userIds) {
    axios.post( "/api/profiles/remove", userIds);
  }

};
