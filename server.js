const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

// returns an Express server application, available through this variable name 'app'.
const app = express();

// configures Morgan to log using the development version, prints additional information to the screen.
app.use(morgan('dev'));

// middleware function express.static() will serve files from the public folder.
// __dirname - special variable in Node, refers to the absolute path of the current directory of the file that it's in.
app.use(express.static(__dirname + '/public'));

// use() method is used to set up middleware functions.
app.use((req, res) => {
    // console.log(req.headers); - No longer needed, Morgan handles logging request information.
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server.</h1></body></html>');
});

// creates an instance of the HTTP server class and starts listening to it.
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});