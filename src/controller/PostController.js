const schema = require("../models/Post");

const createPost = async (req, res) => {
  try {
    const { title, description, auther, tags } = req.body;
    const tagsArray = tags.spilit(',')
    const response = await schema.create({ title, description, auther, tags: tagsArray });
    return res.status(200).json({ response });
  } catch (err) {
    return res.status(500).json({ message: "something went wrong", err });
  }
};

const getAllPost = async (req, res) => {
  try {
    const response = await schema.find({});
    if (!response) return res.status(200).json([]);
    return res.status(200).json(response);
  } catch (er) {
    return res.status(500).json({ err });
  }
};

exports.createPost = createPost;
exports.getAllPost = getAllPost;
