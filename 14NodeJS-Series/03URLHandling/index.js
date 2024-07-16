const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.method} ${req.url} New request Received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === 'GET') res.end("HomePage");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`I am ${username},  a Full Stack Developer`);
        break;
      case "/search":
        const search = myUrl.query.q;
        res.end("Here are the results " + search);
      case '/signup':
        if (req.method === 'GET') res.end("This is a sign up form");
        else if (req.method === "POST"){
          //DB query
          res.end("Success");
        }

      default:
        res.end("404 Not Found");
    }
  });
  // console.log(req);
});

myServer.listen(8000, () => {
  console.log("Server Started!");
});
