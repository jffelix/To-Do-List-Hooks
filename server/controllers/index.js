const dbHelpers = require('../models/index.js');

const controllers = {

    getItems: function(req, res) {
        dbHelpers.getItems((err, results) => {
            if (err) {
                res.status(404).send(err);
                console.log('Error received at getItems in controllers.');
            } else {
                res.status(200).send(results);
                console.log('Successfully connected from getItems in controllers!');
            }
        })
    }
}

module.exports = controllers;