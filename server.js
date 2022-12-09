const express = require('express');

const hostname = 'localhost';
const port = 3000;

// returns an express server application, available through this variable name 'app'.
const app = express();

// use() method is used to set up middleware functions.
app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server.</h1></body></html>');
});

// creates an instance of the HTTP server class and starts listening to it.
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});