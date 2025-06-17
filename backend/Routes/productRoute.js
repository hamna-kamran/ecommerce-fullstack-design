const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const productController = require('../controllers/productController');

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});



router.post('/products', productController.createProduct);         // CREATE
router.get('/products', productController.getAllProducts);         // READ ALL
router.get('/products/:id', productController.getProductById);     // READ ONE
router.put('/products/:id', productController.updateProduct);      // UPDATE
router.delete('/products/:id', productController.deleteProduct);   // DELETE

module.exports = router;



