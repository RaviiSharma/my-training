const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const auth = require("../middleware/auth");

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",auth.authMW, userController.getUserData)
router.put("/users/:userId",auth.authMW, userController.updateUser)
router.put("/user/:userId",auth.authMW, userController.isDeletedTrue)

module.exports = router;