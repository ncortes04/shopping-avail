const express = require('express')
const userModel = require('../models/users')
const router = express.Router()
router.get('/', (req, res) => {
    res.send("users")
})

router.get("/get", async (req, res) => {
    const user = await userModel.find({})

    try {
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
})
router.post("/post", async (req, res) => {
    const user = new userModel(req.body)

    try {
        await user.save()
        res.send(user)
    } catch (error) {
      response.status(500).send(error);
    }
  });

module.exports = router