const mysql = require("mysql2");

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'Shop_Project'
})

// const productTableSQL = 
// `CREATE TABLE IF NOT EXISTS
// products (
//   id int(11) NOT NULL,
//   name varchar(55) NOT NULL,
//   description varchar(500) NOT NULL,
//   photo longblob NOT NULL,
//   seller varchar(55) NOT NULL,
//   creation_date datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`

// const usersTableSQL =
// `CREATE TABLE IF NOT EXISTS
// users (
//   id int(11) NOT NULL,
//   name varchar(255) NOT NULL,
//   email varchar(55) NOT NULL,
//   password varchar(255) NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`

// db.connect(function(err) {
//   console.log("creating database in MySql  ");
//   if (err) throw err;
//   db.query("create database IF NOT EXISTS moahem", function (err, result, fields) {
//     if (err) throw err;
//    // console.log(result);
//   });
//   db.query(productTableSQL, function (err, result, fields) {
//     if (err) throw err;
//    // console.log(result);
//   });
//   db.query(usersTableSQL, function (err, result, fields) {
//     if (err) throw err;
//    // console.log(result);
//   });
//   console.log("done");
// });


db.connect((err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Database connected')
  })
module.exports = db