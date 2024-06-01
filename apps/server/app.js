const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config({});
app.use(express.json());
app.use(cors({ origin: '*' }));

// Routes
app.use('/api/v1/auth', require('./routes/auth.routes'));

app.get('/api/v1/ping', (req, res) => res.send('PONG'));
module.exports = app;
