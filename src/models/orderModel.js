
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId : {
        type : ObjectId,
        ref : "User1"
    },
    productId : {
        type : ObjectId,
        ref : "Product"
    },
    amount : { type : Number },
    isFreeAppUser : { type : Boolean },
    date : {
        type : Date,
        default : Date.now
    }

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)