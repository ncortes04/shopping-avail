const express = require('express')
const router = express.Router()
const {
    addCategory,
    getCategories
} = require('../controllers/category-controller')
const { authMiddleware } = require('../utils/AUTH')

router.route('/createcategory').post(authMiddleware, addCategory)
router.route('/getcategories').get(getCategories)

module.exports = router