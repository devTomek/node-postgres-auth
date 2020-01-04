const router = require("express").Router();
const loginController = require("./controllers/loginController");

router.use("/login", loginController);

module.exports = router;
