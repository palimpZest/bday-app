var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/birthday', function(req, res, next) {
  res.render('birthday');
});

router.get('/birthday-result', function(req, res, next) {
  res.render('birthday-result');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/adresse', function(req, res, next) {
  res.render('adresse');
});

module.exports = router;
