const AuthorModel= require("../models/authorModel")

//1. Write a POST api that creates an author from the details in request body

const createAuthor= async function (req, res) {
    
    let authorCreated = await AuthorModel.create(req.body)
    res.send({data: authorCreated})
}


const getAuthorsData= async function (req, res) {
    let listOfAuthors = await AuthorModel.find()
    res.send({data: listOfAuthors})
}

module.exports.createAuthor=createAuthor
module.exports.getAuthorsData=getAuthorsData