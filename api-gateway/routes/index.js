/*
========================================
; Title: index.js
; Author: Professor Krasso
; Date: 8 November 2020
; Modified by: Brooklyn Hairston
; Description: Index fo the api gateway
;========================================
*/


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
