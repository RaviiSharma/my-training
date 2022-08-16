const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let bookData= req.body
    let book= await BookModel.create(bookData)
    res.send({msg: book})
}

const getBook= async function (req,res){
    let book=await BookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: book})
}

const bookInYear = async function(req,res){
    let year=req.body.year
    let book=await BookModel.find({year:2022})
    res.send({msg:book})
}

const particularBooks= async function(req,res){
    let obj=req.body
    let book = await BookModel.find(obj)
    res.send({msg: book})
}

const getINRBooks= async function(req,res){
    let book = await BookModel.find({"prices.indianPrice":{$in:[100,200,500]}})
    res.send({msg: book})
}

const getRandomBooks = async function(req,res){
    let book=await BookModel.find({$or:[{totalPages:{$gt:500}},{stockAvailable: {$eq:true}}]})
    res.send({msg: book})
}



module.exports.createBook= createBook
module.exports.getBook= getBook
module.exports.bookInYear= bookInYear
module.exports.particularBooks= particularBooks
module.exports.getINRBooks= getINRBooks
module.exports.getRandomBooks= getRandomBooks