const userController = require("./user.controller");
const { validate_token } = require("../../authentication/auth.controller");
const router = require("express").Router();


// const { checkToken, checkTokenUser } = require("../../auth/token_validation")

// routers
router.post("/", userController.createUser); 
router.get("/", validate_token, userController.getUsers);   
// router.get("/:id", checkToken, userController.getUserById); 
// router.patch("/", checkTokenUser, userController.updateUsers); 
// router.delete("/", checkTokenUser, userController.deleteUser); 
// router.post("/login", userController.login);

// make router availble to other modules
module.exports = router;