const pool = require("../config/database");

function getUserByRefreshToken(refreshToken, callBack) {

    // connect to database
    pool.getConnection(function(err) {

        // Somthing went wrong connecting to mysql database
        if(err) throw err;
        
        // run query to insert data into database
        var sql = `select * from Users where refreshToken = ?`;
        pool.query(sql, 
            [refreshToken],
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

function setRefreshToken(id, refreshToken, callBack) {
    // connect to database
    pool.getConnection(function(err) {

        // Somthing went wrong connecting to mysql database
        if(err) throw err;
        
        // run query to insert data into database
        var sql = `update Users set refreshToken=? where id = ?`;
        pool.query(sql, 
            [
                refreshToken,
                id
            ],
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

module.exports = {
    getUserByRefreshToken,
    setRefreshToken
}