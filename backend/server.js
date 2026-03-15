const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const path = require('path');

const app = express();
const PORT = process.env.PORT || 4040; // changed per user request

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// serve index.html on root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Routes
app.use('/api/offices', require('./routes/offices'));
app.use('/api/donors', require('./routes/donors'));
app.use('/api/donees', require('./routes/donees'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/subscribe', require('./routes/subscribers'));

// simple health check
app.get('/api/health', (req, res) => {
  res.json({status: 'ok'});
});

// start server
db.init().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to initialize database', err);
  process.exit(1);
});
