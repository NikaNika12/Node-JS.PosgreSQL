const Router = require ("express");
const postController = require("../controller/post.controller");

const router = new Router()
const UserController = require ("../controller/user.controller")

router.post('/post', postController.createPost)
router.get('/post', postController.getPostsByUser)


module.exports = router