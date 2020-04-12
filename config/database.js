// imports
const mysql = require("mysql");

// create database pool
// allows 10 concurrent connections to database
const pool = mysql.createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10
});

function queryDB(sql, data_array, callBack) {
    
    // connect to database
    pool.getConnection(function(err) {

    // Somthing went wrong connecting to mysql database
    if(err) throw err;
    
    // run query to insert data into database
    //var sql = `insert into Locations(city, state) values(?,?)`;
    pool.query(sql, data_array,
        (error, results, fields) => {
            if(error) {
                // Somthing went wrong running the sql command
                return callBack(error);
            }
            // Data added to table
            return callBack(null, results);
        });
    });
}

// make availble for other modules
module.exports = {
    pool,
    queryDB
}