const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");
const blog_controller = require("../controllers/blogController");

router.post("/create", blog_controller.blog_create_post);

router.get("/blogs", blog_controller.blog_list);

router.get("/blog/details/:id", blog_controller.specific_blog);

module.exports = router;
