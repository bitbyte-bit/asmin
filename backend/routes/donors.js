const express = require('express');
const router = express.Router();
const dbModule = require('../db');

// list donors
router.get('/', (req, res) => {
  const db = dbModule.getDB();
  db.all('SELECT * FROM donors ORDER BY created_at DESC', [], (err, rows) => {
    if (err) return res.status(500).json({error: err.message});
    res.json(rows);
  });
});

// create donor entry (donation submission)
router.post('/', (req, res) => {
  const {name, email, phone, amount, message} = req.body;
  const db = dbModule.getDB();
  db.run(
    'INSERT INTO donors (name, email, phone, amount, message) VALUES (?, ?, ?, ?, ?)',
    [name, email, phone, amount || 0, message],
    function(err) {
      if (err) return res.status(500).json({error: err.message});
      res.json({id: this.lastID, message: 'Donation recorded successfully'});
    }
  );
});

module.exports = router;