// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(errorHandler);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
const studentRoutes = require('./routes/student');
app.use('/api', studentRoutes);

module.exports = app;
