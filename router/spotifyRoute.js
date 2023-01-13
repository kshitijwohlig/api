const express = require("express");
const router = express.Router();

const { Spotify } = require("../controller/spotify");

router.route("/spotify/").get(Spotify);

module.exports = router;
