var proxy = require("express-http-proxy");
var express = require("express");
var server = require("express")();
server.use("/api", proxy("http://baobab.kaiyanapp.com", {
  forwardPath: function(req, res) {
    return "/api"+require("url").parse(req.url).path;
  }
}));
server.use(express.json());
server.use("/static/js", express.static("./static/js"));
server.use("/static/css", express.static("./static/css"));

server.use("/font", express.static("./font"));
server.get("/favicon.ico", (req, res) => {
  res.sendFile(__dirname + "/favicon.ico");
});

server.use((req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3000);
