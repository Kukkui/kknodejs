"use strict";

var http = require('http');

var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.write('Hello World!' + dt.myDateTime());
  res.write(req.url);
  res.end();
}).listen(8080);