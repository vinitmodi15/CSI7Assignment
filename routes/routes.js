const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController.js');
const productController = require('./controllers/productController.js');

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

router.use('/protected', authController.protectedRoute);
router.get('/protected', (req, res) => {
  res.json({ message: 'Welcome to the protected route!' });
});

module.exports = router;