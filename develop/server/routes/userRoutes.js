const express = require('express')
const router = express.Router()
const {
  register,
  login,
  getSingleUser,
  getRole
} = require('../controllers/user-controllers')
const { authMiddleware } = require('../utils/AUTH')

router.route('/register').post(register)
router.route('/me').post(authMiddleware, getSingleUser)
router.route('/getrole').get(authMiddleware, getRole)

router.route('/login').post(login)


module.exports = router