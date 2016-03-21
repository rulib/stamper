var express = require('express');
var router = express.Router();
var dateParser = require('../my_node_modules/unix-date-parser/unix-date-parser.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(/^[\/][\-0-9][0-9]+$/, function(req, res, next) {
  
  res.json(dateParser.dateParse(req.path.slice(1)));
  //res.render('index', { title: 'Unix Date' });
});

router.get(/^[a-z]/, function(req, res, next) {
  
  res.json(dateParser.naturalDateParse(req.path.slice(1)));
  //res.render('index', { title: 'Unix Date' });
});

module.exports = router;
