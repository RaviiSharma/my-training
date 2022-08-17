const express = require("express");
const router = express.Router();
const Controller = require('../controller/controller')

router.get('/test', function(req, res){
  res.send("my first api")
})

router.post('/createBook', Controller.createBook)

router.post('/createAuthor', Controller.createAuthor)

router.get('/bookByChetan', Controller.bookByChetan)

router.get('/priceUpdate', Controller.priceUpdate)

router.get('/booksInPrice', Controller.booksInPrice)



module.exports = router;