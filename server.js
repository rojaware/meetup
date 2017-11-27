// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Environment configuration setup
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

// MongoDB
var options = {
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};
mongoose.connect(process.env.MONGO_URL, options);
// mongoose.connect('mongodb://localhost/rest_test', options);

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(port);
console.log(`Server is running on port ${port} on mongodb : ${process.env.MONGO_URL}`);