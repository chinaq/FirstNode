express = require 'express'
app = express()
port = process.env.PORT or 5000

app.use express.static 'public'
app.set 'views', './src/views'
app.set 'view engine', 'pug'

app.get '/', (req, res) ->
  res.render 'index', {list: ['a', 'b']}

app.listen port, (err) ->
  console.log 'running server on port: ' + port