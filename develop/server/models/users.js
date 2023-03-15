const { Schema, model} = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema ({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: "basic"
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
})

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema)

module.exports = User