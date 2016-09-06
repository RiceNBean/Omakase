var path = require('path');
require('dotenv').config()
var request = require("request");

var searchGoogleModel = module.exports;

searchGoogleModel.getRestaurantList = function(params, res) {
    var query = params.restaurant + params.location;

    var options = {
        method: 'GET',
        url: 'https://maps.googleapis.com/maps/api/place/textsearch/json',
        qs: {
            query: query,
            key: 'AIzaSyBKzBInzbbwqbFWDpH5aqy8I73k3j4XiRM',
            type: 'restaurant'
        }
    };

    request(options, function(error, response, body) {
        if (error) {
            res.status(500).end(error);
        } else {
            res.status(200).send(body);
        }
    });
}