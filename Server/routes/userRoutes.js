const { Router } = require("express");
const router = Router();
const userControllers = require("../controllers/userControllers");

router.get("/user/info", userControllers.user_info_get);

module.exports = router;
