// imports
const locationService = require("./location.service");
const { sign } = require("jsonwebtoken")

function create(req, res) {

    const city = req.body.city
    const state = req.body.state

    if(city == null || state == null) {
        res.status(403).json({
            message: "bad message body"
        })
    }

    locationService.create(req.body, (err, results) => {
        if(err){
            // something went wrong
            return res.status(500).json({
                success: 0,
                message: "Database connection errror",
                detailedError: err
              })
        }

        // success
        return res.status(200).json({
            success: 1,
            data: results
        })

    })
}

function get(req, res) {
    locationService.read(req.body, (err, results) => {
        if(err){
            // something went wrong
            return res.status(500).json({
                success: 0,
                message: "Database connection errror",
                detailedError: err
              })
        }

        // success
        return res.status(200).json({
            success: 1,
            data: results
        })
    })
}

function getByCity(req, res) {
    locationService.readCity(req.params, (err, results) => {
        if(err){
            // something went wrong
            return res.status(500).json({
                success: 0,
                message: "Database connection errror",
                detailedError: err
              })
        }

        // success
        return res.status(200).json({
            success: 1,
            data: results
        })
    })
}

function getByState(req, res) {
    console.log(req.params)
    locationService.readState(req.params, (err, results) => {
        if(err){
            // something went wrong
            return res.status(500).json({
                success: 0,
                message: "Database connection errror",
                detailedError: err
              })
        }

        // success
        return res.status(200).json({
            success: 1,
            data: results
        })
    })
}

function getById(req, res) {
    locationService.readId(req.params, (err, results) => {
        if(err){
            // something went wrong
            return res.status(500).json({
                success: 0,
                message: "Database connection errror",
                detailedError: err
              })
        }

        // success
        return res.status(200).json({
            success: 1,
            data: results
        })
    })
}

function getByExact(req, res) {
    locationService.readExact(req.params, (err, results) => {
        if(err){
            // something went wrong
            return res.status(500).json({
                success: 0,
                message: "Database connection errror",
                detailedError: err
              })
        }

        // success
        return res.status(200).json({
            success: 1,
            data: results
        })
    })
}

// // make available to other modules
module.exports = {
    create,
    get,
    getByCity,
    getByState,
    getByExact,
    getById
}