const express = require('express');
const router = express.Router()

const { createCustomers, getCustomers, getCustomerOne } = require('../controller/customers');


router.route('/').post(createCustomers)
router.route('/').get(getCustomers)
router.route('/:_id').get(getCustomerOne)

module.exports = router;

