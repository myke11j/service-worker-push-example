'use strict';

// dependecies
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// mongoose.Promise = global.Promise;
// mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds151141.mlab.com:${process.env.DB_PORT}/nodexperts-feed`);

// const Feeds = mongoose.model('feeds', schema, 'feeds');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

/* Express routes */

app.get('/', function(req, res){
  res.sendFile('public/index.html');
});

/* Express routes */

module.exports = app
