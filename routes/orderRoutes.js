const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authenticate = require('../middlewares/auth'); // import the auth middleware
const { fileUploadMiddleware } = require('../middlewares/fileUploadValidator');
const { body } = require('express-validator');
const validateRequest = require('../middlewares/validateRequest');


// Validators
const orderValidationRules = [
    body('customer_name').isLength({ min: 3, max: 30 }).withMessage('Customer name must be between 3 to 30 characters'),
    body('shipping_address').isLength({ max: 100 }).withMessage('Shipping address not must be 100 characters max'),
    body('contact_number').matches(/^[0-9]{10}$/).withMessage('Contact number must be a 10-digit'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('product_name').isLength({ min: 3, max: 50 }).withMessage('Product name must be between 3 to 50 characters'),
    body('quantity').isInt({ min: 1, max: 100 }).withMessage('Quantity must be between 1 and 100')
  ];

// Create order
router.post(
    '/', 
    authenticate, 
    fileUploadMiddleware,
    orderValidationRules,
    validateRequest,
    orderController.createNewOrder,
);
 
module.exports = router;
