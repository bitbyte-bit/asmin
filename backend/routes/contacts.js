const express = require('express');
const router = express.Router();
const dbModule = require('../db');

router.post('/', (req, res) => {
  const {name, email, subject, message} = req.body;
  const db = dbModule.getDB();
  db.run(
    'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)',
    [name, email, subject, message],
    function(err) {
      if (err) return res.status(500).json({error: err.message});
      res.json({id: this.lastID, message: 'Message sent successfully'});
    }
  );
});

router.get('/', (req, res) => {
  const db = dbModule.getDB();
  db.all('SELECT * FROM contacts ORDER BY created_at DESC', [], (err, rows) => {
    if (err) return res.status(500).json({error: err.message});
    res.json(rows);
  });
});

module.exports = router;