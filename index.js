#!/usr/bin/env node

'use strict';

// dependencies
const http = require('http');
const app = require('./api');

const port = process.env.PORT || '8000';
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);
server.listen(port, (err) => {
  if (err) {
    return console.log('Error in creating a server.');
  }
  console.log(`Listening on port ${port}`);
});
