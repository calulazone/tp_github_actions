const express = require('express');
require('dotenv').config();

const path = require('path');
const { sum, saveUserToDatabase, getAllUsersFromDatabase } = require('./functions.js');

const app = express();
const port = 3000;
app.use(express.static('src'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/sum', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Invalid parameters' });
  }
  res.json({ result: sum(a, b) });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname, 'user_liste.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.post('/users/create', async (req, res) => {
  const { name, surname, email } = req.body;

  if (!name || !surname || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const result = await saveUserToDatabase(name, surname, email);
    if (result.error) {
      return res.status(400).json({ error: result.error });
    }
    return res.redirect('/users');

  } catch (err) {
    console.error('Erreur base de données :', err);
    return res.status(500).json({
      error: 'Database error',
      details: err.message,
    });
  }
});

app.get('/usersdata', async (req, res) => {
  try {
    const users = await getAllUsersFromDatabase();
    res.json(users);
  } catch (err) {
    console.error('Erreur base de données :', err);
    res.status(500).json({
      error: 'Database error',
      details: err.message,
    });
  }
});

