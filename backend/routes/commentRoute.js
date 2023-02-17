const express = require("express");
const router = express.Router();
const comment_controller = require("../controllers/commentController");

router.post("/submit_comment", comment_controller.comment_create);
