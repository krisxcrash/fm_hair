var http = require("http");
var fs = require("fs");

var PORT = 8080

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

    var path = req.url;

    switch (path) {
        case "/":
        fs.readFile(__dirname + "/index", function(err, data) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
        break;

        case "/about":
        fs.readFile(__dirname + "/about", function(err, data) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
        break;

        case "/contact":
        fs.readFile(__dirname + "/contact", function(err, data) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
        break;

        case "/gallery":
        fs.readFile(__dirname + "/gallery", function(err, data) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
        break;

        case "/scheduling":
        fs.readFile(__dirname + "/scheduling.html", function(err, data) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
        break;

        default: 
        fs.readFile(__dirname + "/index.html", function(err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          });
        break;
    }
}

server.listen(PORT, function() {
    console.log("server is listening on PORT: " + PORT);
})