const router = require("express").Router();
const candidatesController = require("../../controllers/candidatesController");

// Matches with "/api/books"
router.route("/")
  .get(candidatesController.findAll)
  .post(candidatesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(candidatesController.findById)
  .put(candidatesController.update)
  .delete(candidatesController.remove);

module.exports = router;
