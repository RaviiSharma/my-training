
const UserModel = require('../models/userModel')

const CreateUser = async function(req,res){
    let user = await UserModel.create(req.body)
    res.send({user: user})
}

module.exports.CreateUser = CreateUser