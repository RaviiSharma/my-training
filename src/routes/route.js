const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const ProductController= require("../controllers/productController")
const HeaderMiddleware = require ("../middlewares/headerMiddleware")
const OrderController = require('../controllers/orderController')


router.post("/createUser", HeaderMiddleware.headerValidation, UserController.CreateUser)

router.post("/createProduct",ProductController.createProduct)

router.post("/createOrder", HeaderMiddleware.headerValidation, OrderController.createOrder)


module.exports = router;