const { Router } = require("express");
const router = Router();
const accountControllers = require("../controllers/AccountControllers");

router.post("/auth/signup", accountControllers.signup_post);
router.post("/auth/signin", accountControllers.signin_post);
router.get("/auth/logout", accountControllers.logout_get);

module.exports = router;
