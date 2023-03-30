const { User } = require('../models')
const { signToken } = require('../utils/AUTH')
module.exports = {
    async register({body}, res){
        try{
            const user = await User.create(body)
            const token = await signToken(user)
            res.status(200).json({token})
        } catch(err) {
            console.error(err.message)
            res.status(500).json({message: "Could Not Create User"})
        }
    },
    async getSingleUser({ user = null, params }, res) {
      try {
        const foundUser = await User.findOne({
          $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        });

        if (!foundUser) {
          return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }
        res.json({foundUser})
      } catch (err){
        console.error(err)
      }
       
    },
    async getRole({ user = null, params }, res) {
      const foundUser = await User.findOne({
        $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
      });
  
      if (!foundUser) {
        return res.status(400).json({ message: 'Cannot find a user with this id!' });
      }
      res.json(foundUser.role);
    },
    async login({body}, res) {
      const foundUser = await User.findOne({email: body.email})
      if(!foundUser) {
        return res.status(403).json({ message: "No User Found"})
      }
      const isMatch = await foundUser.isCorrectPassword(body.password)
      if(!isMatch) {
        return res.status(403).json({ message: "Incorrect Password"})
      }
      const token = await signToken(foundUser)
      
      res.status(200).json({token, foundUser})
    }
}