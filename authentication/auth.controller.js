// imports
const authService = require("./auth.service");
const userService = require("../core_api/users/user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const jwt = require("jsonwebtoken");

// let refreshTokens = []

// app.post('/token', (req, res) => {
//     const refreshToken = req.body.token
//     if (refreshToken == null) return res.sendStatus(401)
//     // data = database call select id from Users where refreshToken = ?
//     // if data empty then return res.sendStatus(401)
//     jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//         if(err) return res.sendStatus(403)
//         const accessToken = generateAccessToken(/** User */);
//         res.json({accessToken: accessToken});
//     })
// })


// app.delete('/logout', (req, res) => {
//     // sql update Users set refreshToken=NULL where refreshToken = ? [req.body.token]
//     res.sendStatus(204)
// })


// app.post('/login', (req, res) => {
//     // authenticate user
    
// })

// app.post('/login', (req, res) => {
//   // Authenticate User

//   const username = req.body.username
//   const user = { name: username }

//   const accessToken = generateAccessToken(user)
//   const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
//   refreshTokens.push(refreshToken)
//   res.json({ accessToken: accessToken, refreshToken: refreshToken })
// })

function login(req, res) {
    console.log("hit 1")
  const body = req.body;
  userService.getUserByEmail(body.email, (err, results) => {
    console.log("hit 2")
    if(err) {
      return;
    }
    console.log("hit 3")

    if(results === undefined || results.length == 0) {
      return res.json({
        success: 0,
        message: "Invaild email or password"
      });
    }
    console.log("hit 4")
    const result = compareSync(body.password, results[0].password);
    console.log("hit 5 - result: ", result)

    if(result) {
      results.password = undefined;
    //   const jsontoken = sign({result: results}, process.env.ACCESS_TOKEN_SECRET, {
    //     expiresIn: "10m"
    //   });
    console.log(results[0])
    data = {
        firstName: results[0].firstName,
        lastName: results[0].lastName,
        email: results[0].email
    }
      const accessToken = generateAccessToken( data, "10m", process.env.ACCESS_TOKEN_SECRET )
      const refreshToken = generateAccessToken( data, null, process.env.REFRESH_TOKEN_SECRET )
      console.log("hit 6")
      authService.setRefreshToken(results[0].id, refreshToken, (err, completion) => {
         console.log("hit 7")
         console.log(err)
          if(err) return res.sendStatus(403)
          console.log("hit 8")
          return res.json({
              success: 1,
              message: "login success",
              accessToken: accessToken,
              refreshToken: refreshToken
          })
      })
    } else {
      return res.json({
        success: 0,
        message: "invalid email or password"
      });
    }
  });
}

function token(req, res) {
    console.log("thi")
    const refreshToken = req.body.token
    if(refreshToken == null) return res.sendStatus(401)
    authService.getUserByRefreshToken(refreshToken, (err, completion) => {
        if(err) return res.sendStatus(500)
        if(completion.length == 0) return res.sendStatus(403)
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (ver_err, data) => {
            if(ver_err) return res.sendStatus(403)
            console.log(data)
            newData = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email
            }
            const accessToken = generateAccessToken(newData, "15m", process.env.ACCESS_TOKEN_SECRET);
            return res.json({
                accessToken: accessToken
            })
        })

    })
}

function logout(req, res) {
    const body = req.body
    userService.getUserByEmail(body.email, (err, completion) => {
        if(err) return res.sendStatus(403)
        console.log(completion.length == 0)
        if(completion.length == 0) return res.sendStatus(403)
        console.log(completion)
        authService.setRefreshToken(completion[0].id, null, (err, setNullCompletion) => {
            if(err) return res.sendStatus(403)
            console.log(setNullCompletion)
            if(setNullCompletion.changedRows == 0) {
                return res.sendStatus(403)
            }
            return res.sendStatus(205)
        })
    })
}

function generateAccessToken(data, expires, SECRET) {
  if(expires == null) {
    return jwt.sign(data, SECRET)
  }
  return jwt.sign(data, SECRET, { expiresIn: expires })
}

// // make available to other modules
module.exports = {
    login,
    token,
    logout
  }