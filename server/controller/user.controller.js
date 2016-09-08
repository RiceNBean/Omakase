var userModel = require('../model/user.model.js');

exports.user = {
    add: addUser,
    check: checkUser
}

function addUser(req, res) {
    var newUser = {
        name: req.query.name,
        password: req.query.password
    }
    userModel.findUserById(newUser)
        .then(function(user) {
            if (user) {
                res.status(200).send("User already exists");
            } else {
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
    var findUser = {
        name: req.query.name,
        password: req.query.password
    }

    userModel.checkUser(findUser)
        .then(function(user) {
            if (user) {
                console.log("successful user signin");
                res.status(202).send(user);
            } else {
                res.status(200).send("Please sign up first")
            }
        })
        .catch(function(err) {
            res.status(500).end('Error inside findUserById', err)
        })

}
