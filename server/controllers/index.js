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
    },

    postItem: function(req, res) {

        var postObj = req.body;
        console.log('postObj: ', postObj);

        dbHelpers.postItem(postObj, (err, results) => {
            if (err) {
                res.status(400).send(err);
                console.log('Error received at postItem in controllers.');
            } else {
                res.status(200).send(results);
                console.log('Successfully connected from postItem in controllers!');
            }
        })
    },

    updateItem: function(req, res) {
        var updateObj = req.body;

        dbHelpers.updateItem(updateObj, (err, results) => {
            if (err) {
                res.status(400).send(err);
                console.log('Error received at updateItem in controllers.');
            } else {
                res.status(200).send(results);
                console.log('Successfully connected from updateItem in controllers!');
            }
        })
    },

    deleteItem: function(req, res) {
        var deleteObj = req.params;

        console.log('deleteObj: ', deleteObj);

        dbHelpers.deleteItem(deleteObj, (err, results) => {
            if (err) {
                res.status(400).send(err);
                console.log('Error received at deleteItem in controllers.');
            } else {
                res.status(200).send(results);
                console.log('Successfully connected from deleteItem in controllers!');
            }
        })
    }
}

module.exports = controllers;