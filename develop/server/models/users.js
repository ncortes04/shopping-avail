const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    name:{
        type: "string"
    },
    password: {
        type: "string"
    }
})

const User = mongoose.model("User", usersSchema)

module.exports = User