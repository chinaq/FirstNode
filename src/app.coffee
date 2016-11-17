express = require 'express'
app = express()
port = process.env.PORT or 5000

nav = [{
    link: '/Books',
    text: 'Book'
  }, {
    link: '/Authors',
    text: 'Author'  }]

app.use express.static 'public'
app.set 'views', './src/views'
app.set 'view engine', 'pug'

bookRouter = require('./routes/bookRoutes')()
app.use '/books', bookRouter

authorRouter = require('./routes/authorRoutes')()
app.use '/authors', authorRouter

app.get '/', (req, res) ->
  res.render 'index'

app.listen port, (err) ->
  console.log 'running server on port: ' + port