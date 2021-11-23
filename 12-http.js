//http module basics

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("here is our about page");
  }
  res.end(`<h1> Oops! lol ur in the wrong place , this url doen'st exist. </h1>
            <a href='/'> lol dogs </a>`);
});

server.listen(5000);
