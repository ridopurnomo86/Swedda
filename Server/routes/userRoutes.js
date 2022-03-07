const { Router } = require("express");
const router = Router();
const userControllers = require("../controllers/userControllers");

router.get("/user/info", userControllers.user_info_get);
router.post("/user/verify", userControllers.verify_user_post);
router.get("/user/verify/:id", userControllers.verify_user_get);


module.exports = router;
