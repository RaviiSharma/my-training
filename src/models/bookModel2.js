const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name        : String,
    author_id   :  Number, 
    price       : Number,
    ratings     : Number   

})

module.exports = mongoose.model('BestBook', bookSchema)