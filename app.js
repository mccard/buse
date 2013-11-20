//var nr = require('newrelic');
var express = require("express");
var http = require("http");
var server = express();

server.use(express.static(__dirname + '/views'));

server.all("*", function(request, response, next) {
	response.writeHead(200, { "Content-Type": "text/plain" });
	next();
});

server.get("/", function(request, response) {
	response.render("/views/index", { message: "carregar pagina principal" });
});

server.post("/", function(request, response) {
	response.end("posicao recebida, atualizando..");
});

server.get("*", function(request, response) {
	response.end("404 - page not found!");
});

var port = process.env.PORT || 5000;
http.createServer(server).listen(port);
