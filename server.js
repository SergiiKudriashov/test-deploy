"use strict"
const http = require('http');
const url = require('url');
const fs = require('fs');

var PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var IP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
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
  if (reqUrl == '/important' && method == 'get') {
    fs.readFile('./views/important.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
  }
  if (reqUrl == '/sale' && method == 'get') {
    fs.readFile('./views/sale.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
  }
  if (reqUrl == '/contacts' && method == 'get') {
    fs.readFile('./views/contacts.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
  }
}

http.createServer(handler).listen(PORT, IP);
