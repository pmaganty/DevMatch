const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Profile
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Profile
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBySkill: function(req, res) {
    console.log("INSIDE FIND BY SKILLS FUNCTION");
    console.log(req.params.skills);
    /*const skillArr = req.params.skills.split(",");
    for (let i = 0; i < skillArr.length; i++) {
      skillArr[i] = skillArr[i].trim().toLowerCase();
    }

    console.log(skillArr);*/
    db.Profile
      .find( { skills: { $in: [ req.params.skills ] } } )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    console.log("INSIDE FIND BY EMAIL FUNCTION");
    // console.log(req.params.email);
    db.Profile
      .findOne({ email: req.params.email })
      .populate("collaborators")
      .populate("requests")
      .populate("requestors")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Profile
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Profile
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateCollab: function(req, res) {
    console.log("INSIDE UPDATE COLLAB FUNCTION");
    console.log(req.body);
    db.Profile
      .update( { _id: req.body.curId }, { $push: { collaborators: req.body.otherId } } )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

    db.Profile
    .update( { _id: req.body.otherId }, { $push: { collaborators: req.body.curId } } )
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  saveRequest: function(req, res) {
    console.log("INSIDE SAVE REQUEST FUNCTION");
    console.log(req.body);
    db.Profile
      .update({_id: req.body.curId}, { $push: { requests: req.body.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

    db.Profile
    .update({_id: req.body.id}, { $push: { requestors: req.body.curId } } )
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Profile
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  removeRequest: function(req, res) {
    console.log("INSIDE REMOVE REQUEST");
    console.log(req.body);
    db.Profile
      .updateOne( {_id: req.body.curId}, { $pull: { requestors: req.body.otherId } } )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

    db.Profile
    .updateOne( {_id: req.body.otherId}, { $pull: { requests: req.body.curId } } )
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }

  
};
