const schema = require("../models/Post");

const createPost = async (req, res) => {
  try {
    const { title, description, auther, tags } = req.body;
    if (!(tags instanceof Object)) throw Error('Error Occured');
    const response = await schema.create({ title, description, auther, tags });
    return res.status(200).json({ response });
  } catch (err) {
    return res.status(500).json({ message: "something went wrong", err });
  }
};

const getAllPost = async (req, res) => {
  try {
    const response = await schema.find({}).sort({posted: 'desc'});
    if (!response) return res.status(200).json([]);
    return res.status(200).json(response);
  } catch (er) {
    return res.status(500).json({ err });
  }
};

exports.createPost = createPost;
exports.getAllPost = getAllPost;
