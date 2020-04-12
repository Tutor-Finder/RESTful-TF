const database = require("../../config/database")

// Create
function create(data, callBack) {
    sql = `insert into Locations(city, state) values(?,?)`
    my_values = [data.city, data.state]
    database.queryDB(sql, my_values, callBack)
}

// Read
function read(data, callBack) {
    sql = `select * from Locations`
    my_values = []
    database.queryDB(sql, my_values, callBack)
}

function readId(data, callBack) {
    sql = `select * from Locations where id = ?`
    my_values = [data.id]
    database.queryDB(sql, my_values, callBack)
}

function readCity(data, callBack) {
    sql = `select * from Locations where city = ?`
    my_values = [data.city]
    database.queryDB(sql, my_values, callBack)
}

function readState(data, callBack) {
    sql = `select * from Locations where state = ?`
    my_values = [data.state]
    database.queryDB(sql, my_values, callBack)
}

function readExact(data, callBack) {
    sql = `select * from Locations where city = ? and state = ?`
    my_values = [data.city, data.state]
    database.queryDB(sql, my_values, callBack)
}

// Update
function updateId(data, callBack) {

}

// Delete
function deleteId(data, callBack) {

}

module.exports = {
    create,
    read,
    readCity,
    readState,
    readId,
    readExact
}