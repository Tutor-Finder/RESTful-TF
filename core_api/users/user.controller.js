// imports
const userService = require("./user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

// hash the password for a new user
// insert to database
function createUser(req, res) {
        const body = req.body;
        // hash the password
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        
        // insert into database
        userService.create(body, (err, results) => {
          if (err) {
            if(err.code == "ER_DUP_ENTRY") {
              return res.status(406).json({
                success: 0,
                message: "Invalid email"
              })
            }
            // something went wrong
            return res.status(500).json({
              success: 0,
              message: "Database connection errror",
              detailedError: err
            });
          }

          // success
          return res.sendStatus(201)
        });
}

function getUserById(req, res) {
  console.log(req.data)
  const id = req.params.id
  var body = {
    id: id
  }
  userService.getUserById(body, (err, results) =>{
    if(err) {
      console.log(err);
      return;
    }

    if(!results) {
      return res.json({
        success: 0,
        message: "Record not found"
      });
    }
    return res.json({
      success: 1,
      data: results
    });
  });
}

function getUsers(req, res) {
  userService.getUsers((err, results) => {
    if(err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      data: results
    });
  });
}

// function updateUsers(req, res) {
//   console.log(req.data)
//   if(req.user.result[0].id != req.body.id) {
//     return res.json({
//       success: 0,
//       message: "Invalid acces to that account"
//     })
//   }
//   const body = req.body;
//   const salt = genSaltSync(10);
//   body.password = hashSync(body.password, salt);
//   userService.updateUser(body, (err, results) => {
//     if(err) {
//       console.log(err);
//       return;
//     }
//     return res.json({
//       success: 1,
//       message: "updated succesfully"
//     });
//   });
// }

// function deleteUser(req, res) {
//   if(req.user.result[0].id != req.body.id) {
//     return res.json({
//       success: 0,
//       message: "Invalid acces to that account"
//     })
//   }
//   const data = req.body;
//   userService.deleteUser(data, (err, results) => {
//     if(err) {
//       console.log(err);
//       return;
//     }
//     if(results.affectedRows == 0) {
//       return res.json({
//         success: 0,
//         message: "Record not found"
//       });
//     }
//     return res.json({
//       success: 1,
//       message: "user deleted successfully"
//     });
//   });
// }

// function login(req, res) {
//   const body = req.body;
//   userService.getUserByEmail(body.email, (err, results) => {
//     if(err) {
//       return;
//     }
//     //console.log("hit ", results === undefined || results.length == 0);
//     if(results === undefined || results.length == 0) {
//       return res.json({
//         success: 0,
//         message: "Invaild email or password"
//       });
//     }

//     const result = compareSync(body.password, results[0].password);

//     if(result) {
//       results.password = undefined;
//       const jsontoken = sign({result: results}, process.env.ACCESS_TOKEN_SECRET, {
//         expiresIn: "1h"
//       });
//       return res.json({
//         success: 1,
//         message: "login success",
//         token: jsontoken
//       });
//     } else {
//       return res.json({
//         success: 0,
//         message: "invalid email or password"
//       });
//     }
//   });
// }

// // make available to other modules
module.exports = {
  createUser,
  getUsers,
  getUserById
  //updateUsers
//   deleteUser,
//   login
}