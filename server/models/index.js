const db = require('../db/index.js');

const dbHelpers = {
    getItems: function(callback) {
        var queryStr = `SELECT * FROM shoppingList`;

        db.query(queryStr, (err, results) => {
            if (err) {
                callback(err);
                console.log('Error received at getItems in models.');
            } else {
                callback(null, results);
                console.log('Successfully connected from getItems in models!');
            }
        })
    }
}

module.exports = dbHelpers;