var app, express, port;

express = require('express');

app = express();

port = process.env.PORT || 5000;

app.get('/', function(req, res) {
  return res.send('Hei World coffee!');
});

app.listen(port, function(err) {
  return console.log('running server on port: ' + port);
});
