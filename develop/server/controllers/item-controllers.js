const { User } = require('../models')
const Item = require('../models/items')
module.exports = {
    async addPost({ body, user = null, params}, res){
        try {
            const foundUser = await User.findOne({
                $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
            }); 
            if(foundUser.role !== 'admin') {
                return res.status(403)
            }
            const newItem = new Item(body);
          
            await newItem.save();
          
            await newItem.populate({ path: 'category', select: 'name' }).execPopulate();
            res.status(200).json({message: "success"})
        } catch(err) {
            console.log(err.message)
            res.status(500).json({ message: "Something Went Wrong"})
        }
    },
    async servePosts(req, res) {
        try{
            const items = await Item.find().populate({
                path:'category',
                select:'name'
            })
            res.json(items)
        } catch(err){
            console.error(err)
        }
    }
}

