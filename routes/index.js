var express = require('express');
var router = express.Router();
var dateParser = require('../my_node_modules/unix-date-parser/unix-date-parser.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(/^[\/][\-0-9][0-9]+$|^[\/][0-9]$/, function(req, res, next) {
  console.log("Handling as unix date " + req.path);
  res.json(dateParser.dateParse(req.path.slice(1)));
});

router.get(/^[\/][a-z]/, function(req, res, next) {
  console.log("Handling as natural date " + req.path);
  res.json(dateParser.naturalDateParse(req.path.slice(1)));
});

router.get(/^[\/][\-0-9]+[^0-9]+$|^[\/][^\w]/, function(req, res, next) {
  console.log("Handling as null date " + req.path);
  res.json({ "unix": "null", "natural": "null" });
});



module.exports = router;
