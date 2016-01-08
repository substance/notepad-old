var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;
var server = require('substance/util/server');

server.serveStyles(app, '/app.css', path.join(__dirname, 'node_modules', 'substance-examples', 'notepad', 'app.scss'));
server.serveJS(app, '/app.js', path.join(__dirname, 'node_modules', 'notepad', 'app.js'));

// Serve static files
// app.use(express.static(path.join(__dirname, 'node_modules', 'substance-examples', 'notepad')));
// app.use('/fonts', express.static(path.join(__dirname, 'node_modules/font-awesome/fonts')));

app.listen(port, function() {
  console.log("Lens running on port " + port);
  console.log("http://127.0.0.1:"+port+"/");
});

// Export app for requiring in test files
module.exports = app;