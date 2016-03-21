var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(/(^[0-9]+$)/, function(req, res, next) {
  res.render('index', { title: 'Unix Date' });
});

module.exports = router;
