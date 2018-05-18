var http = require('http');
var proxyMock = require('express-proxy-mock');
var app = require('express')();
proxyMock(app)
http.createServer(app).listen(3000,'localhost');
