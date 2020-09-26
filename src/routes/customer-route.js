const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const customerController = require('../controllers/customer-controller');

//Post => localhost:3000/api/customers
router.post('/', customerController.post);

//Get All => localhost:3000/api/customers
router.get('/', customerController.getAll);

//Get por id => localhost:3000/api/customers/id
router.get('/:customerId', customerController.getById);

//Put => localhost:3000/api/customers/id

router.put('/:customerId', customerController.put);

//Delete=> localhost:3000/api/customers/id

router.delete('/:customerId', customerController.delete);












module.exports = router;