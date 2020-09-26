const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const productController = require('../controllers/product-controller');

//Rotas para Produto
//Post => localhost:3000/api/produtos
router.post('/', productController.post);

//Get All => localhost:3000/api/produtos
router.get('/', productController.getAll);

//Get por id => localhost:3000/api/produtos/id
router.get('/:productId', productController.getById);

//Put => localhost:3000/api/produtos/id

router.put('/:productId', productController.put);

//Delete=> localhost:3000/api/produtos/id

router.delete('/:productId', productController.delete);


module.exports = router;