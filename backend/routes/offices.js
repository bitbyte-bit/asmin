const express = require('express');
const router = express.Router();
const dbModule = require('../db');

// list offices
router.get('/', (req, res) => {
  const db = dbModule.getDB();
  db.all('SELECT * FROM offices', [], (err, rows) => {
    if (err) return res.status(500).json({error: err.message});
    res.json(rows);
  });
});

// add an office (for admin use)
router.post('/', (req, res) => {
  const {name, contactName, phone, whatsapp, sms, image} = req.body;
  const db = dbModule.getDB();
  db.run(
    'INSERT INTO offices (name, contactName, phone, whatsapp, sms, image) VALUES (?, ?, ?, ?, ?, ?)',
    [name, contactName, phone, whatsapp, sms, image],
    function(err) {
      if (err) return res.status(500).json({error: err.message});
      res.json({id: this.lastID});
    }
  );
});

module.exports = router;
