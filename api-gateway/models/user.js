/*
========================================
; Title: user.js
; Author: Professor Krasso
; Date: 8 November 2020
; Modified by: Brooklyn Hairston
; Description: User schema for api gateway
;========================================
*/

//header
//const header = require("../hairston-header")

//console.log(header.display('Brooklyn','Hairston','user.js'))

/**
 * Fields username, password and email
 */

var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model("User", userSchema);

//add new users to the database
module.exports.add = (user, callback) => {
    user.save(callback);
};

//get user by Id
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};