const express = require('express');
const router = express.Router();
const UserController1= require("../controllers/userController1")
const ProductController1= require("../controllers/produCtController")
const OrderController1= require("../controllers/orderController")
const {mid1} = require ("../middlewares/commonMiddlewares");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createUser",mid1,UserController1.createUser)
router.post("/createProduct" ,ProductController1.createProduct)
router.post("/createOrder",mid1, OrderController1.createOrder)


module.exports = router;