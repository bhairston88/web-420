/*
========================================
; Title: api-catalog.js
; Author: Professor Krasso
; Date: 8 November 2020
; Modified by: Brooklyn Hairston
; Description: Routes for api gateway
;========================================
*/

//API Routes

var express = require("express");
var router = express.Router();
var auth_controller = require("../controllers/authController");

//POST request for registering a user
router.post("/auth/register", auth_controller.user_register);

//GET request for verifying user tokens
router.get("/auth/token", auth_controller.user_token);

module.exports = router;

//Allow user login requests
router.post("/auth/login", auth_controller.user_login);

//Allow user logout requests
router.get("/auth/logout", auth_controller.user_logout);