const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUserById,
} = require("../controllers/user");

const router = express.Router();

router.route("/").get(handleGetAllUsers).post(handleCreateNewUserById);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
