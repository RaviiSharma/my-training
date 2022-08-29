const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function(req,res){
  let user = await userModel.create(req.body)
  res.send({status: true, msg: user})
}

const userLogin = async function(req,res){
  let userName = req.body.emailId
  let password = req.body.password

  let user = await userModel.findOne({emailId : userName, password : password})
  if(!user) return res.send({status: false, msg: "username or password is incorrect "})

  let userToken = jwt.sign(
    {
      userId : user._id.toString()
    },
     "ravikumarsharma"
     )
  console.log(userToken)

  // res.setHeader('x-auth-token', userToken)
  res.send({status : true, msg: userToken})
}

const getUser = async function (req, res){
  let id = req.params.userId
  let userById = await userModel.findById(id)
 res.send({status: true, msg: userById})

}

const updateUserData = async function(req, res){
  let id = req.params.userId
  let data = req.body
  let updateUser = await userModel.findByIdAndUpdate({_id : id}, {$set : data}, {new : true})
  res.send({status: true, msg: updateUser})

}

const deleteUserData =  async function(req,res){
  let id = req.params.userId
  let deleteUser = await userModel.findByIdAndUpdate({_id : id}, {$set : {isDeleted: true}}, {new : true})
  res.send({status: true, msg: deleteUser})
}

module.exports.createUser = createUser
module.exports.userLogin = userLogin
module.exports.getUser = getUser
module.exports.updateUserData = updateUserData
module.exports.deleteUserData = deleteUserData
