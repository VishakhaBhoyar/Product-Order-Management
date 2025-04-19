const db = require('../config/db');

// Create admin 
const createAdmin = async (username, hashedPassword) => {
    const [result] = await db.query('INSERT INTO admins (username, password) VALUES (?, ?)', [username, hashedPassword]);
    return result.insertId;
};

// Get Admin by Username
const getAdminByUsername = async (username) => {
    const [rows] = await db.query(`SELECT * FROM admins WHERE username = ?`, [username]);
    return rows[0];
};

// Get All Orders
const fetchAllOrders = async () => {
    const [rows] = await db.query(`SELECT * FROM orders ORDER BY order_date DESC`);
    return rows;
};
  
// Get Order by ID
  const fetchOrderById = async (id) => {
    const [rows] = await db.query(`SELECT * FROM orders WHERE id = ?`, [id]);
    return rows[0];
};
  
// Delete Order
const deleteOrder = async (id) => {
    const [result] = await db.query(`DELETE FROM orders WHERE id = ?`, [id]);
    return result;
};
  
// Update Quantity
const updateOrderQuantity = async (id, quantity) => {
  const [result] = await db.query(
    `UPDATE orders SET quantity = ? WHERE id = ?`,
    [quantity, id]
  );
  return result;
};

module.exports = {
  createAdmin,
  getAdminByUsername,
  fetchAllOrders,
  fetchOrderById,
  deleteOrder,
  updateOrderQuantity
};