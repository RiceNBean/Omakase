var userModel = require('../model/user.model.js');
var bcrypt = require('bcrypt')

exports.user = {
    add: addUser,
    check: checkUser
}

function addUser(req, res) {
    var newUser = {
        name: req.query.name,
        password: req.query.password
    }
    userModel.findUser(newUser)
        .then(function(user) {
            if (user) {
                res.status(200).send("User already exists");
            } else {
              console.log("after findUserby id ");
                userModel.addUser(newUser)
                    .then(function(result) {
                        res.status(200).send(result)
                    })
                    .catch(function(err) {
                        res.status(500).end('Error inside create user', err)
                    })
            }
        })
        .catch(function(err) {
            res.status(500).end('Error inside findUserById', err)
        })
}

function checkUser(req, res) {
  console.log("in checkuser req", req.query);
  var lookupUser = {
    name: req.query.name,
    password: req.query.password
  }

  userModel.findUser(lookupUser)
  .then(function(user){
    if(user){
      //if user exsits, check password
      userModel.checkUser(lookupUser)
      .then(function(result){
        if(result)
          res.status(202).send(result);
        else
          res.status(200).send('wrong password');
      })

    }else{
      //if user doesnt exist , return GO SIGNUP!
      res.status(200).send("Please sign up first")
    }
  })
  .catch(function(err){
    res.status(500).end('Error inside findUserById', err)
  })

}
