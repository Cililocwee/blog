const Comment = require("../models/commentModel");
const async = require("async");
const { body, validationResult } = require("express-validator");

// Display all comments for a blog
// TODO
exports.comment_list = (req, res, next) => {};

// Post a comment
exports.comment_create = [
  // Validate and sanitize
  body("comment_body")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Comment must be longer than 1 letter")
    .escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return;
    }

    //Data sanitized

    const newComment = new Comment({
      username: req.body.username,
      profile_pic_url: req.body.profile_pic_url,
      comment_body: req.body.comment_body,
      date_posted: req.body.date_posted,
      associated_blog: req.body.associated_blog,
    });

    newComment.save();
  },
];

// Delete a comment
// TODO
