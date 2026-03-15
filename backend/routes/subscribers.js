const express = require('express');
const router = express.Router();
const dbModule = require('../db');

// subscribe to newsletter
router.post('/', (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  
  const db = dbModule.getDB();
  db.run(
    'INSERT OR IGNORE INTO subscribers (email) VALUES (?)',
    [email],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) {
        return res.json({ message: 'Already subscribed!' });
      }
      res.json({ id: this.lastID, message: 'Subscribed successfully!' });
    }
  );
});

// list subscribers
router.get('/', (req, res) => {
  const db = dbModule.getDB();
  db.all('SELECT * FROM subscribers ORDER BY created_at DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

module.exports = router;
