const router = require("express").Router();
const votersRoutes = require("./voters");
const candidatesRoutes = require("./candidates");
// voter routes
router.use("/voters", votersRoutes);
// candidates routes
router.use("/candidates", candidatesRoutes);

module.exports = router;