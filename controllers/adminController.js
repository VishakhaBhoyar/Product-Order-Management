const adminService = require('../services/adminService');

// Register Admin (optional route)
const adminRegister = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await adminService.adminRegister(username, password);
    res.status(201).json({ message: 'Admin created successfully', admin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login Admin
const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await adminService.adminLogin(username, password);
    res.status(200).json({ message: 'Login successful', token: result.token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// Get all orders
const fetchAllOrders = async (req, res) => {
  try {
    const orders = await adminService.fetchAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
  
// Get order by ID
const fetchOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    const order = await adminService.fetchOrderById(id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
  
// Delete order
const deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    await adminService.deleteOrder(id);
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
  
// Update order quantity
const updateOrderQuantity = async (req, res) => {
  try {
    const id = req.params.id;
    const { quantity } = req.body;
    await adminService.updateOrderQuantity(id, quantity);
    res.status(200).json({ message: 'Order quantity updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  adminRegister,
  adminLogin,
  fetchAllOrders,
  fetchOrderById,
  deleteOrder,
  updateOrderQuantity
};
