const express = require('express');
const router = express.Router();
const UserController= require("../controllers/UserController")
const MiddleWare = require('../middleware/auth')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// Public API's
router.post("/users", UserController.createUser)

router.post("/login", UserController.userLogin)

// Private API's
router.get("/users/:userId", MiddleWare.authenticate, MiddleWare.authorize, UserController.getUser)

router.put("/users/:userId", MiddleWare.authenticate, MiddleWare.authorize, UserController.updateUserData)

router.put('/users/:userId',MiddleWare.authenticate, MiddleWare.authorize, UserController.deleteUserData)


module.exports = router;