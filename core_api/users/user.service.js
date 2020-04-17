const database = require("../../config/database")

// create new user
function create(data, callBack) {
    sql = `insert into Users(firstName, lastName, email, gender, password, phone) values(?,?,?,?,?,?)`
    my_values = [
                data.firstName,
                data.lastName,
                data.email,
                data.gender,
                data.password,
                data.phone
            ]
    database.queryDB(sql, my_values, callBack)
}

function getUsers(callBack) {
    var sql = `select firstName, lastName, email, gender from Users`;
    my_values = []
    database.queryDB(sql, my_values, callBack)
}

function getUserById(data, callBack) {
    var sql = `select id, firstName, lastName, gender, email, password, phone from Users where id = ?`;
    my_values = [data.id]
    database.queryDB(sql, my_values, callBack)
}

function updateUser(data, callBack) {
    var sql = `update Users set firstName=?, lastName=?, gender=?, email=?, password=?, phone=? where id = ?`
    my_values = [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ]
    database.queryDB(sql, my_values, callBack)
}

function deleteUser(data, callBack) {
    var sql = `delete from registration where id = ?`
    my_values = [data.id]
    database.queryDB(sql, my_values, callBack)
}

function getUserByEmail(data, callBack) {
    console.log("hit")
    console.log(data)
    var sql = `select * from Users where email = ?`;
    my_values = [data.email]
    database.queryDB(sql, my_values, callBack)
}

// make availible by other modules
module.exports = {
    create,
    getUserByEmail,
    getUsers,
    getUserById,
    //updateUser
//     deleteUser,
};
