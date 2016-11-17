express = require 'express'
authorRouter = express.Router()

router = ->
  authorRouter.route '/'
    .get (req, res) ->
      res.render 'authorView'
    authorRouter



module.exports = router