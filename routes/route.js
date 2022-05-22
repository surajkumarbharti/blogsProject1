const express = require('express');
const router = express.Router();
const AuthorController = require("../controller/authorController")
const BlogController = require('../controller/blogController')
const mid= require('../middleware/auth.js')


router.post('/createAuthor', AuthorController.createAuthor)
router.post('/createBlog', BlogController.createBlog)
router.get('/getblog', mid.authentication, BlogController.getblog)
router.put('/updateblog/:blogId',mid.authentication, mid.authorization, BlogController.updateblog)
router.delete('/deleteById/:blogId',mid.authentication, mid.authorization, BlogController.deleteById)
router.delete('/deleteBlogByParam',mid.authentication, mid.authorization, BlogController.deleteBlogByParam)
router.post('/loginAuthor', AuthorController.loginAuthor)



// router.get('/filterblog', BlogController.filterblog)




module.exports = router;