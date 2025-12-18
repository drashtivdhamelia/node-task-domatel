const Post = require("../models/Post.model");

exports.createPost = async (req, res) => {
  const post = await Post.create({
    userId: req.user.id,
    caption: req.body.caption
  });

  res.status(201).json(post);
};


exports.getPosts = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const skip = parseInt(req.query.skip) || 0;

  const posts = await Post.find()
    .populate("userId", "name email")
    .limit(limit)
    .skip(skip)
    .sort({ createdAt: -1 });

  res.json(posts);
};


// (Removed duplicate getPosts - caching version above will be used)

exports.likePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    { $inc: { likes: 1 } },
    { new: true }
  );

  res.json(post);
};

exports.getUserPosts = async (req, res) => {
  const posts = await Post.find({ userId: req.params.userId });
  res.json(posts);
};
