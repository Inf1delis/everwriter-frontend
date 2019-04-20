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
const port = process.env.PORT || 7777;
var expressServer = app.listen(port);