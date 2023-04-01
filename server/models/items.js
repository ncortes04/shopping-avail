const { Schema, model } = require('mongoose')

const itemSchema = new Schema({
    brand:{
        type: String
    },
    name:{
        type: String
    },
    price:{
        type: Number
    },
    category: {
       type: Schema.Types.ObjectId,
       ref: 'Category',
       required: true
    },
    description:{
        type: String
    },
})

const Item = model('items', itemSchema)

module.exports = Item
