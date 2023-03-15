const express = require('express')
const router = express.Router()
const {
    addPost,
    servePosts
} = require('../controllers/item-controllers')
const { authMiddleware } = require('../utils/AUTH')

router.route('/createpost').post(authMiddleware, addPost)
router.route('/getposts').get(servePosts)

module.exports = router