const postController = require("../controller/PostController");
const router = require("express").Router();

router.post("/post", postController.createPost);
router.get("/post", postController.getAllPost);

module.exports = router;
