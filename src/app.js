var app, express, port;

express = require('express');

app = express();

port = 5000;

app.get('/', function(req, res) {
  return res.send('Hello World!');
});

app.listen(port, function(err) {
  return console.log('running server on port: ' + port);
});
