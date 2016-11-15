express = require 'express'
app = express()
port = 5000

app.get '/', (req, res) ->
  res.send 'Hello World!'

app.listen port, (err) ->
  console.log 'running server on port: ' + port