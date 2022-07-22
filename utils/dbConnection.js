const mysql = require('mysql2');

const dbConnection = mysql.createPool({
    host:process.env.host,
    user:process.env.username,
    password:process.env.password,
    database:process.env.db
});

module.exports = dbConnection.promise();