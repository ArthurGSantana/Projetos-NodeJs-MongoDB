let http = require("http");

let server = http.createServer((req, res) => {
    let caminho = req.url;
    caminho === '/' ? res.end("<html><body>portal de noticias</body></html>") :
     res.end(`<html><body>portal de ${caminho.replace('/', '')}</body></html>`)
});

server.listen(5000);



