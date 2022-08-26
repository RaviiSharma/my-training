const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema({
    //write the schema content here
         
    name:String,
    category:String,
    price:{
        type:Number,
        require:true
    }
},{timestamps:true });

module.exports = mongoose.model('newProduct',productSchema )