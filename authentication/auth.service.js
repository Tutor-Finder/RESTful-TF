const database = require("../config/database");

function getUserByRefreshToken(refreshToken, callBack) {
    sql = `select * from Users where refreshToken = ?`
    my_values = [refreshToken]
    database.queryDB(sql, my_values, callBack)
}

function setRefreshToken(id, refreshToken, callBack) {
    sql = `update Users set refreshToken=? where id = ?`
    my_values = [
                    refreshToken,
                    id
                ]
    database.queryDB(sql, my_values, callBack)
}

module.exports = {
    getUserByRefreshToken,
    setRefreshToken
}