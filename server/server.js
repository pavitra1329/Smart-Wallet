// server.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Set up PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Basic route
app.get('/', (req, res) => {
  res.send('Expense Splitter App Backend');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Add Expense route
app.post('/expenses', async (req, res) => {
  const { description, amount, paid_by } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO expenses (description, amount, paid_by) VALUES ($1, $2, $3) RETURNING *',
      [description, amount, paid_by]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error adding expense', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all Expenses
app.get('/expenses', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM expenses');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching expenses', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
