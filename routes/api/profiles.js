const router = require("express").Router();
const profilesController = require("../../controllers/profilesController");

// Matches with "/api/profiles"
router.route("/")
  .get(profilesController.findAll)
  .post(profilesController.create);

// Matches with "/api/profiles/:skills"
router
.route("/:skills")
.get(profilesController.findBySkill)
.put(profilesController.update)
.delete(profilesController.remove);

module.exports = router;
