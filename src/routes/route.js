const obj =require('../logger/logger.js')
const ab=require('../util/helper')
const aab=require('../validator/formatter')

const express = require('express');
const router = express.Router();

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
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason