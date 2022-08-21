const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

 //3. Write a POST api that creates a book from the details in the request body.
 // The api takes both the author and publisher from the request body. 

const createBook= async function (req, res) {
    let data = req.body
    let auId = data.author
    let pbId = data.publisher

    let author1 = await authorModel.findById(auId)
    let publisher1 = await publisherModel.findById(pbId) 
    
    if(data.hasOwnProperty("author")){
        
        if(author1 === null)  {
    //The authorId is present in the request body. If absent send an error message that this detail is required        
            return  res.send({error: "author is not present"})
        }else{

     if (data.hasOwnProperty("publisher")){

            if(publisher1 === null){
    //The publisherId is present in the request body. If absent send an error message that this detail is required            
                return res.send({error : "publisher is not present"})
            }else{
                let bookData = await bookModel.create(data)
                return res.send({book : bookData})
            }
           } else{
    //If present, make sure the publisherId is a valid ObjectId in the publisher collection
    // If not then send an error message that the publisher is not present.   
               return res.send({error : "publisher id is required" })
           }       
        }
    } 
    //If present, make sure the authorId is a valid ObjectId in the author collection. 
    //If not then send an error message that the author is not present.
    else { return  res.send({error: "author id is required"})
    }
}

//4. Write a GET api that fetches all the books along with their author details (you have to populate for this)
// as well the publisher details (you have to populate for this) 
const getBooksData = async function (req, res) {
    let books = await bookModel.find().populate("author").populate("publisher")
    res.send({data: books})
}

//5.Create a new PUT api /books and perform the following two operations
// (a) Add a new boolean attribute in the book schema called isHardCover with a default false value.
// For the books published by 'Penguin' and 'HarperCollins', update this key to true.
const updateHardCover = async function (req, res){

    let data = req.body

    let books = await bookModel.find().populate("publisher")

        
    let booksByPublisher = books.filter(ele => (ele.publisher.name == "Penguin") || (ele.publisher.name == "HarperCollins")) 

    let booksName = booksByPublisher.map(x => x.name)
    // console.log(booksName)
    let updatedCover = []

    for (let i=0; i<booksName.length;  i++){
        let element = booksName[i]
        let updateData = await bookModel.findOneAndUpdate({name : element}, {$set : data}, {new : true})
        updatedCover.push(updateData)
    }
    res.send({updatedCover : updatedCover})    

}
//5. (b) For the books written by authors having a rating greater than 3.5,
// update the books price by 10 (For eg if old price for such a book is 50, new will be 60) 
const authorRating =async function (req,res){
    let check = await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    let updatePrice = await bookModel.updateMany({author:check},{ $inc: { price : +10}},{new : true})
    console.log(updatePrice)
    res.send({data:updatePrice})
}



module.exports.createBook=createBook
module.exports.getBooksData=getBooksData
module.exports.updateHardCover=updateHardCover
module.exports.authorRating=authorRating
