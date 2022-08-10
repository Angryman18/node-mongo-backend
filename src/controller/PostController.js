const schema = require("../models/Post");
const slugGenerator = require("../utils/slug-generator");
const asyncWrapper = require("./async");

const createPost = asyncWrapper(async (req, res) => {
  const { title, description, auther, tags } = req.body;
  if (!(tags instanceof Object)) throw Error("Error Occured");
  const slug = `${slugGenerator(auther)}/${slugGenerator(title)}`;
  const response = await schema.create({ title, description, auther, tags, slug });
  return res.status(200).json({ response });
});

const getSinglePost = asyncWrapper(async (req, res) => {
  const { slug } = req.query;
  const getPost = await schema.find({ slug });
  return res.status(200).json(getPost);
});

const getAllPost = asyncWrapper(async (req, res) => {
  const response = await schema.find({}).sort({ posted: "desc" });
  if (!response) return res.status(200).json([]);
  return res.status(200).json(response);
});

exports.createPost = createPost;
exports.getAllPost = getAllPost;
exports.getSinglePost = getSinglePost;
