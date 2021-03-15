let http = require("http");

let server = http.createServer((req, res) => {
  res.end("<html><body>portal de noticias</body></html>");
});

server.listen(5000);



