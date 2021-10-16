const router = require("express").Router();
const userController = require("../controller/user.controller");

router.route("/login").post(userController.login);
router.route("/signup").post(userController.signup);
router.route("/verify").get(userController.verifyToken);

module.exports = router;
