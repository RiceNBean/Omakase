var db = require('../database/db.js')
var _ = require('underscore')
var bcrypt = require('bcrypt')

var userModel = module.exports

userModel.addUser = function(attr) {
	//add user
	var saltRounds = 10;
 	var hash = bcrypt.hashSync(attr.password, saltRounds);
	attr.password = hash;
	return db('Users').insert(attr)
	.then(function(result) {
		return result;
	})
}

userModel.findUser = function(params){
	//check if user exists
	return db('Users').where({
		name: params.name
		}).limit(1)
		.then(function(rows) {
			return rows[0];
		})
}
userModel.checkUser = function(params){
	//check if username and password matches
	return db('Users').where({
		name: params.name
	}).limit(1)
	.then(function(rows) {
		console.log(rows);
		var hash = rows[0].password;
		if (bcrypt.compareSync(params.password, hash)){
			return rows[0];
		}
		else {
			return false;
		}
	})
}
