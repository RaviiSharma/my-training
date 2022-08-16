const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook", BookController.createBook  )

router.get("/getBook", BookController.getBook)

router.post("/getBooksInYear", BookController.bookInYear)

router.post("/getParticularBooks", BookController.particularBooks)

router.get("/getXINRBooks", BookController.getINRBooks)

router.get("/getRandomBooks", BookController.getRandomBooks)


module.exports = router;