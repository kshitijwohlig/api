const express = require('express');
const router = express.Router()

const { createProducts, getProducts } = require('../controller/products');


router.route('/').post(createProducts)
router.route('/').get(getProducts)

module.exports = router;

