const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const memeController= require("../controllers/memeController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)


router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/getByDistrict", CowinController.getByDistrictId)
router.get("/getWetherData", CowinController.getSortedCities)

router.get("/getMemes", memeController.getMemes)
router.post("/createMemes", memeController.createMemes)




module.exports = router;
