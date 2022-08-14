

const express = require('express');
const router = express.Router();
const UserModel= require("../models/bookSchema.js")
const bookController= require("../controllers/controller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/newBookData", bookController.newBookData )

router.get("/getBookData", bookController.getBookData)

module.exports = router;