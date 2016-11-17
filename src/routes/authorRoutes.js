var authorRouter, express, router;

express = require('express');

authorRouter = express.Router();

router = function() {
  authorRouter.route('/').get(function(req, res) {
    return res.render('authorView');
  });
  return authorRouter;
};

module.exports = router;
