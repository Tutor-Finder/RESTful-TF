// imports
require("dotenv").config()
const express = require("express")
const app = express()
const userRouter = require("./core_api/users/user.router")
const locationRouter = require("./core_api/locations/location.router")

// config for express
app.use(express.json())

// routes
app.use("/api/users", userRouter)
app.use("/api/location", locationRouter)

// Listen on a port
app.listen(process.env.CORE_SERVER_PORT, ()=>{
    console.log("Core API Server Listening on port: ", process.env.CORE_SERVER_PORT)
});