const router = require("express").Router();
const userController = require("../controller/user.controller");

router.route("/login").post();
router.route("/signup").post(userController.signup);

module.exports = router;
