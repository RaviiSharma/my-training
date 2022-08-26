const req = require ("express/lib/request")
const userModel = require("../models/userModel")

const createUser = async function(req,res){
    let data = req.body
    let user = await userModel.create(data)

    res.send({msg:user})
}

module.exports.createUser = createUser 