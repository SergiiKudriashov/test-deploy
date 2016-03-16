"use strict"
const http = require('http');
const url = require('url');
const fs = require('fs');

const PORT = 8080;
const handler = (req, res) => {
  let reqUrl = req.url;
  let method = req.method.toLowerCase();

  if (reqUrl == '/' && method == 'get') {
    fs.readFile('./views/home.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
  }
  if (reqUrl == '/not' && method == 'get') {
    fs.readFile('./views/not.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
  }
}

http.createServer(handler).listen(PORT);
