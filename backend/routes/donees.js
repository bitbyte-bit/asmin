const express = require('express');
const router = express.Router();
const dbModule = require('../db');

router.get('/', (req, res) => {
  const db = dbModule.getDB();
  db.all('SELECT * FROM donees ORDER BY created_at DESC', [], (err, rows) => {
    if (err) return res.status(500).json({error: err.message});
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const {name, description} = req.body;
  const db = dbModule.getDB();
  db.run(
    'INSERT INTO donees (name, description) VALUES (?, ?)',
    [name, description],
    function(err) {
      if (err) return res.status(500).json({error: err.message});
      res.json({id: this.lastID});
    }
  );
});

module.exports = router;