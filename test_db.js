const db = require('./config/db');

(async () => {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS result');
    console.log('Database Connected! Test Result:', rows[0]);
  } catch (err) {
    console.error('Database Connection Failed:', err);
  }
})();
