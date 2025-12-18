const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");
const auth = require("../middleware/auth.middleware");
router.post("/createpost", auth, postController.createPost);
router.get("/getposts", postController.getPosts);
router.post("/:id/like", auth, postController.likePost);
router.get("/user/:userId", postController.getUserPosts);

module.exports = router;
