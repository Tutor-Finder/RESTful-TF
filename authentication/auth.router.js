const authController = require("./auth.controller");
const router = require("express").Router();

// const { checkToken, checkTokenUser } = require("../../auth/token_validation")

// routers
router.post("/login", authController.login);
router.post("/token", authController.token);
router.delete("/logout", authController.logout);

// make router availble to other modules
module.exports = router;