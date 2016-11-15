express = require 'express'
app = express()
port = process.env.PORT or 5000

app.get '/', (req, res) ->
  res.send 'Hei World coffee!'

app.listen port, (err) ->
  console.log 'running server on port: ' + port