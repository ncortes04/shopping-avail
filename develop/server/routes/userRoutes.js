const express = require('express')
const userModel = require('../models/users')
const router = express.Router()

router.get("/", async (req, res) => {
    const user = await userModel.find({})

    try {
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
})
router.post("/", async (req, res) => {
    const user = new userModel(req.body)
    console.log(req)
    try {
        await user.save()
        res.send()
    } catch (error) {
      response.status(500).send(error);
    }
  });

module.exports = router