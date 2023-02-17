const express = require("express");
const router = express.Router();
const comment_controller = require("../controllers/commentController");

router.post("/submit", comment_controller.comment_create);

module.exports = router;
