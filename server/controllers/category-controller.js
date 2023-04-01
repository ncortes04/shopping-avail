const Category = require('../models/category')
const User = require('../models/users')
module.exports = {
    async addCategory({body, user = null, params}, res) {
        console.log(body)
        try {
            const foundUser = await User.findOne({
                $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
            }); 
            if(foundUser.role !== 'admin') {
                return res.status(403)
            }
            await Category.create(body)
            res.status(200).json({ message: 'Success'})
        } catch(err) {
            console.error(err)
        }
    },
    async getCategories(req, res) {
        try{
        const categories = await Category.find()

        res.json(categories)
        } catch(err){
            console.error(err)
        }
    }
}