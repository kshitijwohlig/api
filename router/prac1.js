// require express 
const express = require("express");
// express router
const router = new express.Router();


const {createData, getPrac1} = require('../controller/prac1')

router.route("/prac1/").post(createData);
router.route("/prac1/").get(getPrac1)

module.exports = router 




