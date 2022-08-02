const { mongoose } = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: [String],
  auther: { type: String, required: true },
  posted: { type: String, default: new Date().now },
});

module.exports = mongoose.model("posts", PostSchema);
