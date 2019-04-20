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
<<<<<<< HEAD
const port = process.env.PORT || 7777;
=======
const port = 8765;
>>>>>>> 5d18e8ca5454489f0476e53cd7da0bdccc893112
var expressServer = app.listen(port);

