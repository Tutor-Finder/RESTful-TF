const pool = require("../../config/database");

// create new user
function create(data, callBack) {

    // connect to database
    pool.getConnection(function(err) {

        // Somthing went wrong connecting to mysql database
        if(err) throw err;
        
        // run query to insert data into database
        var sql = `insert into Users(firstName, lastName, email, gender, password, phone) values(?,?,?,?,?,?)`;
        pool.query(sql, 
            [
                data.firstName,
                data.lastName,
                data.email,
                data.gender,
                data.password,
                data.phone
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

function getUsers(callBack) {

    // connect to database
    pool.getConnection(function(err) {

        // Somthing went wrong connecting to mysql database
        if(err) throw err;
        
        // run query to insert data into database
        var sql = `select firstName, lastName, email, gender, phone from Users`;
        pool.query(sql, 
            [],
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

function getUserById(data, callBack) {

    // connect to database
    pool.getConnection(function(err) {

        // Somthing went wrong connecting to mysql database
        if(err) throw err;
        
        // run query to insert data into database
        var sql = `select id, firstName, lastName, gender, email, password, phone from Users where id = ?`;
        pool.query(sql, 
            [data],
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

function updateUser(data, callBack) {

    // connect to database
    pool.getConnection(function(err) {

        // Somthing went wrong connecting to mysql database
        if(err) throw err;
        
        // run query to insert data into database
        var sql = `update Users set firstName=?, lastName=?, gender=?, email=?, password=?, phone=? where id = ?`;
        pool.query(sql, 
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error, results, fields) => {
                if(error) {
                    // Somthing went wrong running the sql command
                    return callBack(error);
                }
                // Data added to table
                return callBack(null, results[0]);
            });
    });
}

// function deleteUser(data, callBack) {

//     // connect to database
//     pool.getConnection(function(err) {

//         // Somthing went wrong connecting to mysql database
//         if(err) throw err;
        
//         // run query to insert data into database
//         var sql = `delete from registration where id = ?`;
//         pool.query(sql, 
//             [data.id],
//             (error, results, fields) => {
//                 if(error) {
//                     // Somthing went wrong running the sql command
//                     return callBack(error);
//                 }
//                 // Data added to table
//                 return callBack(null, results);
//             });
//     });
// }

function getUserByEmail(email, callBack) {

    // connect to database
    pool.getConnection(function(err) {

        // Somthing went wrong connecting to mysql database
        if(err) throw err;
        
        // run query to insert data into database
        var sql = `select * from Users where email = ?`;
        pool.query(sql, 
            [email],
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
// make availible by other modules
module.exports = {
    create,
    getUserByEmail,
    getUsers,
    getUserById,
    updateUser
//     deleteUser,
};
