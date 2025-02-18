const express = require('express');
const cors = require('cors');
const alimentoRoutes = require('./routes/alimentoRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/alimentos', alimentoRoutes);

module.exports = app;