const orderService = require('../services/orderService');

// Create new order
const createNewOrder = async (req, res) => {
  try {
    const orderData = req.body;

    // Handle file upload
    if (req.file) {
        orderData.product_image = req.file.filename; // just filename, path is uploads/
    }

    const orderId = await orderService.createNewOrder(orderData);
    res.status(201).json({ message: 'Order created successfully', orderId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createNewOrder
};
