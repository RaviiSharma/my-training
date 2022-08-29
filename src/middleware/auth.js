const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const authenticate = async function(req, res, next) {
    let token = req.headers["x-auth-token"]
    
    if(!token) return res.send({status: false, msg: "token must be provided"})
    
    let verifiedToken = jwt.verify(token , "ravikumarsharma")   
    if(!verifiedToken) return res.send({status: false, msg: "Invalid token"})

      req.isVerifiedTokenId = verifiedToken.userId
    console.log(verifiedToken)
    next()
}


const authorize = async function(req, res, next) {
    let id = req.params.userId
    let tokenId = req.isVerifiedTokenId
    let userById = await userModel.findById(id)
    if (!userById) return res.send({status: false, msg: "user does not exist"})
  
    if(tokenId != id) return res.send({status: false, msg: "Unauthorized access"})
    next()
}

module.exports.authenticate = authenticate
module.exports.authorize = authorize