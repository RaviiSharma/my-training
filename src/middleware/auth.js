const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const authenticate = async function(req, res, next) {
   try{
       let token = req.headers["x-auth-token"]
       
       if(!token) return res.status(400).send({status: false, msg: "token must be provided"})
       
       let verifiedToken = jwt.verify(token , "ravikumarsharma")   
       if(!verifiedToken) return res.status(401).send({status: false, msg: "Invalid token"})
       console.log(verifiedToken)
       
       req.isVerifiedTokenId = verifiedToken.userId
       
       next()
    }catch (error){
        res.status(500).send({error : error.message})
    }
}


const authorize = async function(req, res, next) {
    try{
        let id = req.params.userId
       
        if(!id) return res.status(400).send({status: false, msg: "invalid ID"})

        let userById = await userModel.findById(id)
    if (!userById) return res.status(404).send({status: false, msg: "user does not exist"})

    let tokenId = req.isVerifiedTokenId
  
    if(tokenId != id) return res.status(403).send({status: false, msg: "Unauthorized access"})
    next()
    } catch (error){
        res.status(500).send({error: error.message})
    }
}

module.exports.authenticate = authenticate
module.exports.authorize = authorize