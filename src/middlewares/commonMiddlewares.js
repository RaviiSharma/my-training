const OrderModel= require("../models/orderModel")
const userModel= require("../models/userModel")

const mid1= function(req,res,next){
    if(req.headers["isfreeappuser"]===undefined) {
        res.send({Error: "the request is missing a mandatory header"})  
    } else if (req.headers["isfreeappuser"]==='true') {
        req.isFreeAppUser = true
        next();
    } else if (req.headers["isfreeappuser"] === 'false') {
        req.isFreeAppUser = false
        next();
    } else {
        res.send({Error:"isfreeappuser can be either true or false"})
    };
}

module.exports.mid1=mid1
