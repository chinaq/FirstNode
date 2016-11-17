var app, authorRouter, bookRouter, express, nav, port;

express = require('express');

app = express();

port = process.env.PORT || 5000;

nav = [
  {
    link: '/Books',
    text: 'Book'
  }, {
    link: '/Authors',
    text: 'Author'
  }
];

app.use(express["static"]('public'));

app.set('views', './src/views');

app.set('view engine', 'pug');

bookRouter = require('./routes/bookRoutes')();

app.use('/books', bookRouter);

authorRouter = require('./routes/authorRoutes')();

app.use('/authors', authorRouter);

app.get('/', function(req, res) {
  return res.render('index');
});

app.listen(port, function(err) {
  return console.log('running server on port: ' + port);
});
