const bookSchema= require("../models/bookSchema")

const newBookData= async function (req, res) {
    let bookData= req.body
    let savedData= await bookSchema.create(bookData)
    res.send({newBook: savedData})
}

const getBookData= async function (req, res) {
    let allBooks = await bookSchema.find()
    res.send({bookCollection:allBooks})
}

module.exports.newBookData= newBookData
module.exports.getBookData= getBookData