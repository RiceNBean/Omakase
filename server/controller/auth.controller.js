var authModel = require('../model/auth.model.js');
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;

exports.auth = {
  getFacebook: getFacebook
}


function getFacebook(req,res){
}
