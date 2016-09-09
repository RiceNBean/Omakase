var db = require('../database/db.js')
var _ = require('underscore');
var bcrypt   = require('bcrypt-nodejs');
// var scrypt = require("scrypt");


var authModel = module.exports

authModel.addUser = function(attr) {
	return new Promise(function(resolve,reject) {
		return db('Users').insert(attr)
		.then(function(result) {
			attr.id = result[0]
			return resolve(attr)
		})
	})
}

authModel.findUserById = function(params) {
	return db('Users').where({
		FB_id: params.FB_id
	}).limit(1)
	.then(function(rows) {
		return rows[0]
	})
}
