const locationController = require("./location.controller")
const auth = require("../../authentication/auth.controller")
const router = require("express").Router()

// routers
router.post("/", locationController.create)
router.get("/", locationController.get)
router.get("/city/:city", locationController.getByCity)
router.get("/state/:state", locationController.getByState)
router.get("/:id", locationController.getById)
router.get("/:state/:city", locationController.getByExact)

// make router availble to other modules
module.exports = router;