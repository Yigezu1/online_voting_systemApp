const router = require("express").Router();
const votersController = require("../../controllers/votersController");

// Matches with "/api/books"
router.route("/")
  .get(votersController.findAll)
  .post(votersController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(votersController.findById)
  .put(votersController.update)
  .delete(votersController.remove);

module.exports = router;
