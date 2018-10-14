const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Atlas MongoDB
mongoose.connect(
  "mongodb://bassem:Bassem01" +
  "@dev-task-shard-00-00-9fanj.mongodb.net:27017,dev-task-shard-00-01-9fanj.mongodb.net:27017,dev-task-shard-00-02-9fanj.mongodb.net:27017/test?ssl=true&replicaSet=dev-task-shard-0&authSource=admin&retryWrites=true",
  {
    useNewUrlParser: true
  }
);
mongoose.Promise = global.Promise;

const productsRoute = require('./api/routes/products');

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  // Fixing CORS & Limiting to GET
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    return res.status(200).json();
  }
  next();
});

// API
app.use('/products', productsRoute);

// Error Handling
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  })
});

module.exports = app;