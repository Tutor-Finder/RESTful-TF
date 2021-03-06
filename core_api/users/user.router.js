const userController = require("./user.controller");
const auth = require("../../authentication/auth.controller");
const router = require("express").Router();

// routers
router.post("/", userController.createUser); 
router.get("/", auth.validate_token, userController.getUsers);   
router.get("/:id", auth.validate_token, userController.getUserById); 
//router.patch("/", auth.validate_token, userController.updateUsers); 
// router.delete("/", checkTokenUser, userController.deleteUser); 

// make router availble to other modules
module.exports = router;