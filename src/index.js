const express = require('express');
const path = require('path');
const { sum } = require('./functions.js');

const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
