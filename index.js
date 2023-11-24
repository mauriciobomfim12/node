const http = require('http');

http.createServer((req, res) => {
  console.log(`Received request for: ${req.url}`);

  if (req.url === "/") {
    console.log("Responding with 'Olá Mundo'");
    res.write("<h1>Olá Mundo</h1>");
    res.end();
  }
}).listen(3333, '0.0.0.0', () => {
  console.log('Servidor HTTP está escutando na porta 3333 em todas as interfaces');
});
