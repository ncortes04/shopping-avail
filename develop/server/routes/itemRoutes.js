const express = require('express')
const router = express.Router()
const {
    addPost,
    servePosts,
    getindividualItem
} = require('../controllers/item-controllers')
const { authMiddleware } = require('../utils/AUTH')

router.route('/createpost').post(authMiddleware, addPost)
router.route('/getposts').get(servePosts)
router.route('/single:id').get(getindividualItem)

module.exports = router