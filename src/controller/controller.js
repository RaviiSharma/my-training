
const { reset } = require('nodemon')
const BookModel = require('../models/bookModel2')
const AuthorModel = require('../models/authorModel2')
const authorModel2 = require('../models/authorModel2')


const createBook = async function(req, res){
let bookData = req.body
let book = await BookModel.create(bookData)
res.send({msg: book})
}
const createAuthor = async function(req, res){
    let authorData = req.body
    let author = await AuthorModel.create(authorData)
   res.send({msg: author})   
}
const bookByChetan = async function (req, res){
    let authorDetails = await AuthorModel.findOne({author_name : "Chetan Bhagat"})
    let authorId = authorDetails.author_id
    let chetanBook = await BookModel.find({author_id : authorId}).select({name : 1, _id : 0})
    
    res.send({bookByChetan: chetanBook })
} 
const priceUpdate = async function (req, res) {
    let savedData= await BookModel.findOneAndUpdate({name: "Two states"},{$set: {price: 100}},{new : true})
    let authordata = await authorModel2.find({author_id : savedData.author_id }).select("author_name")
    let price = savedData.price
    res.send({msg: authordata, price})
}
const booksInPrice = async function(req,res){

    let books =  await (await BookModel.find({price: {$gte : 50, $lte : 100}}).select({author_id :1, _id:0})).map(x => x.author_id)

    let arr = []
    for(let i=0; i< books.length ; i++){
        let arr1 = await (await AuthorModel.find({author_id : books[i]}).select({author_name : 1, _id : 0 })).map(x => x.author_name)
        arr.push(arr1 )
    }
    const arrayOfAuthors = arr.flat()
    res.send({author_name : arrayOfAuthors})
    
    
}



module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.bookByChetan = bookByChetan
module.exports.priceUpdate = priceUpdate
module.exports.booksInPrice = booksInPrice