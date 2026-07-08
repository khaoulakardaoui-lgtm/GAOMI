const mysql = require('mysql2/promise');

// Pool de connexions MySQL — réutilise les connexions au lieu d'en ouvrir
// une nouvelle à chaque requête (meilleure performance)
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'gestion_ao_marches',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
