// require express 
const express = require("express");
// express router
const router = new express.Router();


const {getUser, postUser, getParticularUser, updateUser, deleteUser} = require('../../controller/User/User')

router.route("/user/").get(getUser)
router.route("/user/").post(postUser)
router.route("/user/:id").get(getParticularUser)
router.route("/user/:id").patch(updateUser)
router.route("/user/:id").delete(deleteUser)

module.exports = router 




