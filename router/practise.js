// require express 
const express = require("express");
// express router
const router = new express.Router();


const { practise } = require('../controller/practise')

router.route("/practise/").get(practise)

module.exports = router 




