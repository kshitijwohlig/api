const express = require('express');
const router = express.Router();

const {liveScore} = require('../controller/livescore');

router.route('/liveScore/').get(liveScore);

module.exports = router