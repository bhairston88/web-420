/*
========================================
; Title: check-token.js
; Author: Professor Krasso
; Date: 5 December 2020
; Modified by: Brooklyn Hairston
; Description: Check-token for the api gateway
;========================================
*/

//require statements

var jwt = require("jsonwebtoken");
var config = require("./config");
const { JsonWebTokenError } = require("jsonwebtoken");

/**
 * Check the HTTP header for a valid JSON web token
 * @param  req 
 * @param  res 
 * @param  next 
 */

function checkToken(req, res, next) {
    var token = req.headers["x-access-token"];

    if(!token)
        return res.status(403).send({auth: false, message: "No token provided."});
    
    jwt.verify(token, config.web.secret, function(err, decoded) {
        if(err) return res.status(500).send({auth: false, message: "Failed to authenticate token."});

        req.userId = decoded.id;
        next();
    });
}


module.exports = checkToken;