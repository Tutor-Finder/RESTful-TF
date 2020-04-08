// imports
require("dotenv").config()
const express = require("express");
const app = express();
const userRouter = require("./core_api/users/user.router");

// config for express
app.use(express.json());

// routes
app.use("/api/users", userRouter);

// Listen on a port
app.listen(process.env.CORE_SERVER_PORT, ()=>{
    console.log("Core API Server Listening on port: ", process.env.CORE_SERVER_PORT); 
});