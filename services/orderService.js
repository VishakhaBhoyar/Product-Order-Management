const orderModel = require('../models/orderModel');

// Create a new order
const createNewOrder = async (orderData) => {
  const orderId = await orderModel.createNewOrder(orderData);
  return { message: 'Order created successfully', orderId };
};

module.exports = {
  createNewOrder
};
