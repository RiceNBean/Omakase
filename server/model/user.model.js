var db = require('../database/db.js')
var _ = require('underscore')

var userModel = module.exports

userModel.addUser = function(attr) {
	return new Promise(function(resolve,reject) {
		return db('Users').insert(attr)
		.then(function(result) {
			attr.id = result[0];
			return resolve(attr)
		})
	})
}
userModel.findUserById = function(params){
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
		name: params.name,
		password: params.password
	}).limit(1)
	.then(function(rows) {
		return rows[0];
	})
}
