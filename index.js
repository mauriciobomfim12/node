const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('C:\\Users\\Administrator\\Downloads\\backend\\backend\\node_modules\\node-gyp\\test\\fixtures\\server.key'),
  cert: fs.readFileSync('C:\\Users\\Administrator\\Downloads\\backend\\backend\\node_modules\\node-gyp\\test\\fixtures\\server.crt'),
};

const server = https.createServer(options, (req, res) => {
  // Lógica do seu servidor
});

server.listen(3000, () => {
  console.log('Servidor HTTPS está escutando na porta 3000');
});
