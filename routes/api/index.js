const router = require("express").Router();
const bookRoutes = require("./profiles");

// Book routes
router.use("/profiles", bookRoutes);

module.exports = router;
