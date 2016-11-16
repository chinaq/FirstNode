var app, express, port;

express = require('express');

app = express();

port = process.env.PORT || 5000;

app.use(express["static"]('public'));

app.set('views', './src/views');

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  return res.render('index', {
    list: ['a', 'b']
  });
});

app.listen(port, function(err) {
  return console.log('running server on port: ' + port);
});
