const mysql = require('mysql2');
require('dotenv').config();
const dbConnection = mysql.createPool({
    host:process.env.host,
    user:process.env.db_username,
    password:process.env.password,
    database:process.env.db
});
module.exports = dbConnection.promise();