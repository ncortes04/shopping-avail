const { Schema, model } = require('mongoose')

const categorySchema = new Schema ({
    name:{
        type: String,
        unique: true
    }
})

categorySchema.pre('save', async function(next) {
    this.name = this.name.toLowerCase()
})

const Category = model('Category', categorySchema)

module.exports = Category