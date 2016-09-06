var authModel = require('../model/auth.model.js'); 

exports.auth = {
	getLogin: getLogin,
	postLogin: postLogin,
	getSignUp: getSignUp,
	postSignUp: postSignUp,
	getFacebook: getFacebook,
	getFacebookCallback: getFacebookCallback,
	getVote: getVote,
	logOut: logOut
}


	function getLogin(req, res){
		authModel.findUserById();
		.then(function(data) {
		res.status(200).send(data);
	})
		.catch(function(error) {
			res.status(500).send(error)
		})
	//
	};

	function getSignUp(req, res){
			
	.then(function(data) {
		res.status(200).send(data);
	})
	.catch(function(error) {
		res.status(500).send(error)
	})
	//
	};

	function postSignUp(req, res){
	passport.authenticate('local-signup', {
		successRedirect : '/voteSurvey',
		failureRedirect : '/signup',
		failureFlash : true
	})
	//
	.then(function(data) {
		res.status(200).send(data);
	})
	.catch(function(error) {
		res.status(500).send(error)
	})
	//

	};

	function postLogin(req, res){
	  passport.authenticate('local-login', {
		successRedirect : '/voteSurvey',
		failureRedirect : '/login-to-vote',
		failureFlash : true
	})
	//
		.then(function(data) {
			res.status(200).send(data);
		})
		.catch(function(error) {
			res.status(500).send(error)
		})
	//
	};


	function getVote(req, res){
		isLoggedIn();
		res.render('profile.ejs', {
			user: req.user
		})
	
		//
		.then(function(data) {
			res.status(200).send(data);
		})
		.catch(function(error) {
			res.status(500).send(error)
		})
	//
	};

	function getFacebook(req, res){
		passport.authenticate('facebook', { scope : 'email' })
		authModel.addUser();
		.then(function(data) {
			res.status(200).send(data);
		})
		.catch(function(error) {
			res.status(500).send(error)
		})}
	//;

 function getFacebookCallback(req, res){
        passport.authenticate('facebook', {
            successRedirect : '/voteSurvey',
            failureRedirect : '/'
        })
        	//
	.then(function(data) {
		res.status(200).send(data);
	})
	.catch(function(error) {
		res.status(500).send(error)
	})
};

function getLogout(req, res){
		req.logout();
		res.redirect('/');
	};
};

function isLoggedIn(req, res, next){
	if(reqisAuthenticated()){
		return next();
	}
	res.redirect('/');
}
