const root = process.cwd(),
   path = require('path'),
   express = require('express'),
   fs = require('fs'),
   app = express(),
   resourcesPath = path.join('', '.');

const global = (function() {
   return this || (0, eval)('this');
})();

app.use(express.static(resourcesPath));
const port = process.env.PORT || 777;
var expressServer = app.listen(port);

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', function connection(ws) {

   ws.on('message', function incoming(message) {
     console.log('received: %s', message);
   });
   ws.send('connected');
 });
