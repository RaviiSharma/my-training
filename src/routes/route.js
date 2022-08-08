const obj =require('../logger/logger.js')
const ab=require('../util/helper')
const aab=require('../validator/formatter')

const express = require('express');
const router = express.Router();
const lodash = require('lodash');

router.get('/test-me', function (req, res) {
    obj.message()
    console.log("==============")
    ab.printDate()
    console.log("==============")
    ab.printMonth()
    console.log("==============")
    ab.getBatchInfo()
    console.log("==============")
    aab.trim()
    aab.upperCase()
    aab.lowerCase()


    let months=['jan','feb','mar','apr','may','june','july','aug','sept','oct','nov','dec']
    console.log(lodash.chunk(months,3))
    let oddNumbers=[1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(oddNumbers))
    let arr1=[1,2,5,4,5]
    let arr2=[2,5,3,4,15]
    let arr3=[3,6,5,4,8]
    let arr4=[6,4,5,3,1]
    let arr5=[9,7,6,55,4,99]
    console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))
    const pairs=[["horror","the shining"],["darma","Titanic"],["Thriller","shutter Island"],["Fantasy","pans labyrinth"]]
    console.log(lodash.fromPairs(pairs))

    

    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason