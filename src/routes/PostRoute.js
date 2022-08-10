const postController = require("../controller/PostController");
const router = require("express").Router();

// router.post("/post", postController.createPost);
// router.get("/post", postController.getAllPost);
router.route('/post').get(postController.getAllPost).post(postController.createPost)
router.get('/getSinglePost', postController.getSinglePost);

module.exports = router;
