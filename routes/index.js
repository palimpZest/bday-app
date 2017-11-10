var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const multer  = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'tmp/' })
const config = require('../config.js');


/* -----------Connexion BDD */
const connection = mysql.createConnection(config);

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId); // Vérification de la connexion en console
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// router.get('/birthday', function(req, res, next) {
//   res.render('birthday');
// });

router.get('/birthday', function(req, res, next) {
  console.log(req.body);
  connection.query('SELECT * FROM Personnes', function (error, results, fields) {
    if (error) {
      console.log(error);
    }
    res.render('birthday', {
      title: 'Birthday Page',
      actus : results
    });
    console.log(results);
  });
});

router.get('/birthday-result', function(req, res, next) {
  console.log(req.body);
  connection.query('SELECT Anniversaire FROM Personnes WHERE Anniversaire = DATE(NOW())', function (error, results, fields) {
    if (error) {
      console.log(error);
    }
    res.render('birthday-result', {
      title: 'Birthday Page',
      actus : results
    });
    console.log(results);
  });
});

router.get('/adresse', function(req, res, next) {
  console.log(req.body);
  connection.query('SELECT Arrondissement FROM Personnes', function (error, results, fields) {
    if (error) {
      console.log(error);
    }
    res.render('adresse', {
      title: 'Adresses Page',
      actus : results
    });
    console.log(results);
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
