// db.js
const mariadb = require('mariadb');
require('dotenv').config();

const pool = mariadb.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  connectionLimit: 5
});

module.exports = pool;