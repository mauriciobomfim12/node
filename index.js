const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('C:\\Users\\Administrator\\Downloads\\backend\\backend\\node_modules\\node-gyp\\test\\fixtures\\server.key'),
  cert: fs.readFileSync('C:\\Users\\Administrator\\Downloads\\backend\\backend\\node_modules\\node-gyp\\test\\fixtures\\server.crt'),
};

const server = https.createServer(options, (req, res) => {
  // Lógica do seu servidor
});

// O segundo argumento para listen é o endereço IP ao qual você deseja vincular
// Se você deseja ouvir em todas as interfaces, use '0.0.0.0'
server.listen(3000, '0.0.0.0', () => {
  console.log('Servidor HTTPS está escutando na porta 3000 em todas as interfaces');
});