const schema = require("../models/Post");
const slugGenerator = require('../utils/slug-generator')

const createPost = async (req, res) => {
  try {
    const { title, description, auther, tags } = req.body;
    if (!(tags instanceof Object)) throw Error('Error Occured');
    const slug = `${slugGenerator(auther)}/${slugGenerator(title)}`
    const response = await schema.create({ title, description, auther, tags, slug });
    return res.status(200).json({ response });
  } catch (err) {
    return res.status(500).json({ message: "something went wrong", err });
  }
};

const getSinglePost = async (req, res) => {
  try {
    const {slug} = req.query;
    const getPost = await schema.find({slug})
    return res.status(200).json(getPost)
  } catch(err) {
    return res.status(500).json({message: 'Error Getting Single Post' + err})
  }
}

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
exports.getSinglePost = getSinglePost