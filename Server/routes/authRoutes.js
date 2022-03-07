const { Router } = require("express");
const router = Router();
const authControllers = require("../controllers/authControllers");

router.post("/auth/signup", authControllers.signup_post);
router.post("/auth/signin", authControllers.signin_post);
router.get("/auth/logout", authControllers.logout_get);

module.exports = router;
