// init-db.js
const pool = require('./db.js');

async function createTables() {
  let conn;
  try {
    conn = await pool.getConnection();

    // Table `users`
    await conn.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        surname VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await conn.query(`
      INSERT INTO users (name, surname, email)
      VALUES 
      ('Alice', 'Dupont', 'alice.dupont@example.com'),
      ('Bob', 'Martin', 'bob.martin@example.com'),
      ('Charlie', 'Durand', 'charlie.durand@example.com')
      ON DUPLICATE KEY UPDATE email=email;
    `);

    console.log('Tables créées avec succès.');
  } catch (err) {
    console.error('Erreur lors de la création des tables :', err);
  } finally {
    if (conn) conn.release();
    process.exit();
  }
}

createTables();
