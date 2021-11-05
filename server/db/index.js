const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "todoHooks"
});

db.connect((err, results) => {
    if (err) {
        console.log("Error received at db: ", err);
        return;
    } else {
        console.log("Successfully connected at db!");
    }
})

module.exports = db;