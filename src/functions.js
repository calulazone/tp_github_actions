function sum(a, b) {
  return a + b;
}

function isValidName(name) {
  return typeof name === 'string'
    && /^[a-zA-Z]+$/.test(name.trim())
    && name.trim().length >= 2
    && name.trim().length < 50;
}

function isValidEmail(email) {
  return typeof email === 'string'
    && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    && email.trim().length > 0;
}

async function saveUserToDatabase(name, surname, email) {
  const pool = require('./db/db.js');
  if (!isValidName(name) || !isValidName(surname)) {
    return { error: 'Invalid name or surname' };
  }
  if (!isValidEmail(email)) {
    return { error: 'Invalid email' };
  }
  const result = await pool.query(
    'INSERT INTO users (name, surname, email) VALUES (?, ?, ?)',
    [name, surname, email]
  );
  const insertId = Number(result.insertId);
  console.log('User saved to database:', insertId);
  return { success: true, message: 'User saved successfully', user: result };
}

async function getAllUsersFromDatabase() {
  const pool = require('./db/db.js');
  const result = await pool.query('SELECT * FROM users');
  return result;
}

module.exports = { sum, isValidName, isValidEmail, saveUserToDatabase, getAllUsersFromDatabase };