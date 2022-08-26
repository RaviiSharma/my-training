const mongoose = require('mongoose');
const { stringify } = require('querystring');

const userSchema = new mongoose.Schema({
    //write the Schema content
    name :String,
    balance:{
        type:Number,
        default:100
    },
    address:String,
    age:Number,
    gender:{
        type:String,
        enum:["male","female","other"]
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    }

},{timestamps:true});

module.exports = mongoose.model('newUser',userSchema)//users