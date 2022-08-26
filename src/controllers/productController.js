const req = require ("express/lib/request")
const productModel = require("../models/productModel")

const createProduct = async function(req,res){
    let data = req.body
    let product = await productModel.create(data)

    res.send({msg:product})
}

module.exports.createProduct= createProduct