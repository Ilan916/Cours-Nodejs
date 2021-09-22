
const http = require('http');
const app = require('./app');
const PORT = process.envPORT || 3000;



app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT);


