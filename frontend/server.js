const express = require('express');
const path = require('path');
const https = require('https');
const http = require('http');
const fs = require('fs');

const app = express();

// // Define Content Security Policy sources
// const scriptSources = [
//   "'self'",
//   'https://unpkg.com',
//   'https://cdn.jsdelivr.net'
// ];

// const connectSources = [
//   "'self'",
//   'https://motoroctane.co.in:5000'
// ];

// // Use Helmet for security

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all routes by serving the index.html file
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof URIError) {
    console.error('Failed to decode URL:', req.url);
    res.status(400).send('Bad Request');
  } else {
    next(err);
  }
});

// SSL options for HTTPS server
const sslOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/motoroctane.co.in/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/motoroctane.co.in/fullchain.pem')
};

// Create HTTPS server
https.createServer(sslOptions, app).listen(443, function() {
  console.log('HTTPS Server is running on port 443');
});

// Create HTTP server and redirect all requests to HTTPS
http.createServer((req, res) => {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen(80, function() {
  console.log('HTTP Server is running on port 80 and redirecting to HTTPS');
});