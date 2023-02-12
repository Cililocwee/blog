//TODO Separate out the controller logic from the route logic

const Blog = require("../models/blogModel");
const async = require("async");
const { body, validationResult } = require("express-validator");

// Display all blogposts
exports.blog_list = (req, res, next) => {
  Blog.find()
    // .sort(["date_posted", "ascending"])
    .exec(function (err, list_blogs) {
      if (err) {
        return next(err);
      }

      //Success => Render
      res.send(list_blogs);
    });
};

// Display detailed blogpost (specific blogpost)
exports.specific_blog = (req, res, next) => {
  console.log(req);
  Blog.findById(req.params.id).exec(function (err, one_blog) {
    if (err) {
      return next(err);
    }

    // Success => Render
    console.log(one_blog._id);
    res.send(one_blog);
  });
};

// Blogpost create form POST
exports.blog_create_post = [
  // Validate and sanitize
  body("title")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Title must be longer than 1 letter."),
  body("content")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Content must be longer than 1 letter."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Do better with this
      console.log(errors);
      return;
    }
    // Data is validated

    // Create blog object
    const newBlog = new Blog({
      title: req.body.title,
      content: req.body.content,
      date_posted: req.body.date_posted,
    });

    newBlog.save();
  },
];

// Handle blogpost delete POST

// Display comments for one blogpost

// Handle blogpost update form POST

// ------------------------- //

// Blogpost create form GET
// ** React Router is handling the GET requests... is this okay?

//** Display blogpost update form GET

//** Display blogpost delete GET
