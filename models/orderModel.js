const db = require('../config/db');

// Create New Order
const createNewOrder = async (orderData) => {
  const {
    customer_name,
    shipping_address,
    contact_number,
    email,
    product_image,
    product_name,
    quantity
  } = orderData;

  const [result] = await db.query(
    `INSERT INTO orders 
    (customer_name, shipping_address, contact_number, email, product_image, product_name, quantity)
    VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [customer_name, shipping_address, contact_number, email, product_image, product_name, quantity]
  );

  return result.insertId;
};

module.exports = {
  createNewOrder
};
