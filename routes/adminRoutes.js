const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authenticate = require('../middlewares/auth');

// Admin Authentication Routes
router.post('/register', adminController.adminRegister);  
router.post('/login', adminController.adminLogin);

// Admin Api Function Routes

// Get all orders
router.get('/', authenticate, adminController.fetchAllOrders);

// Get order by ID
router.get('/:id', authenticate, adminController.fetchOrderById);

// Delete order
router.delete('/:id', authenticate, adminController.deleteOrder);

// Update quantity
router.put('/:id/quantity', authenticate, adminController.updateOrderQuantity);

module.exports = router;
