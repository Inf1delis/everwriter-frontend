const root = process.cwd(),
   path = require('path'),
   express = require('express'),
   fs = require('fs'),
   app = express(),
   resourcesPath = path.join('', '.'),
    mongoose = require('mongoose');

const Router = require('./app/router');
let router = new Router();

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {useNewUrlParser: true}, function(err) {
    if(err != null) console.log('MongoDB Error:\n' + err);
});

const global = (function() {
   return this || (0, eval)('this');
})();

app.use(express.static(resourcesPath));
const port = process.env.PORT || 777;
var expressServer = app.listen(port);

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws, req) {

   ws.on('message', function incoming(message) {
       router.go(req, ws, message);
   });
 });
