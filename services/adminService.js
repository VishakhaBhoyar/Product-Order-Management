const bcrypt = require('bcryptjs');
const adminModel = require('../models/adminModel');
const { generateToken } = require('../helpers/jwtHelper'); 
// const jwt = require('jsonwebtoken');

// Create a new Admin
const adminRegister = async (username, password) => {
  const existingAdmin = await adminModel.getAdminByUsername(username);
  if (existingAdmin) {
    throw new Error('Admin already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const adminId = await adminModel.createAdmin(username, hashedPassword);
  return { id: adminId, username };
};

// Login Admin
const adminLogin = async (username, password) => {
  const admin = await adminModel.getAdminByUsername(username);
  if (!admin) {
    throw new Error('Admin not found');
  }

  const isPasswordMatch = await bcrypt.compare(password, admin.password);
  if (!isPasswordMatch) {
    throw new Error('Invalid password');
  }

// Use centralized JWT generation
const token = generateToken({ id: admin.id, username: admin.username });

  return { token };
};

// Get all orders
const fetchAllOrders = async () => {
  const orders = await adminModel.fetchAllOrders();
  return orders;
};
  
// Get order by ID
const fetchOrderById = async (id) => {
  const order = await adminModel.fetchOrderById(id);
  if (!order) {
    throw new Error('Order not found');
  }
  return order;
};
  
// Delete order
const deleteOrder = async (id) => {
  const result = await adminModel.deleteOrder(id);
  if (result.affectedRows === 0) {
    throw new Error('Order not found or already deleted');
  }
  return { message: 'Order deleted successfully' };
};
  
// Update quantity
const updateOrderQuantity = async (id, quantity) => {
  const result = await adminModel.updateOrderQuantity(id, quantity);
  if (result.affectedRows === 0) {
    throw new Error('Order not found or quantity unchanged');
  }
  return { message: 'Order quantity updated successfully' };
};

module.exports = {
  adminRegister,
  adminLogin,
  fetchAllOrders,
  fetchOrderById,
  deleteOrder,
  updateOrderQuantity
};
