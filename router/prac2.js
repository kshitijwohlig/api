// require express 
const express = require("express");
// express router
const router = new express.Router();


const {createData, getPrac2} = require('../controller/prac2')

router.route("/prac2/").post(createData)
router.route("/prac2/").get(getPrac2)

module.exports = router 




