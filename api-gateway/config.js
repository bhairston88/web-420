/*
========================================
; Title: congfig.js
; Author: Professor Krasso
; Date: 8 November 2020
; Modified by: Brooklyn Hairston
; Description: Demonstrates Port configuration
;========================================
*/

var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
module.exports = config;
config.web.secret = "topsecret";