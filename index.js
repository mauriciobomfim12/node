const https = require('https');

https.createServer((req, res) => {
  if(req.url == "/"){
    res.write("<h1>ola mundo</h1>")
  }
}).listen(3333,'0.0.0.0', () => {
  console.log('Servidor HTTPS está escutando na porta 3000 em todas as interfaces');
});