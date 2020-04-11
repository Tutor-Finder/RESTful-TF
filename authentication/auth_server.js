// imports
require("dotenv").config()
const express = require("express");
const app = express();
const authRouter = require("./auth.router");

// config for express
app.use(express.json());

// routes
app.use("/auth", authRouter);

// Listen on a port
app.listen(process.env.AUTH_SERVER_PORT, ()=>{
    console.log("Authentication Server Listening on port: ", process.env.AUTH_SERVER_PORT); 
});
