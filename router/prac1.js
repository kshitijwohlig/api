// require express 
const express = require("express");
// express router
const router = new express.Router();


const {createData} = require('../controller/prac1')

router.route("/prac1/").post(createData);

module.exports = router 




