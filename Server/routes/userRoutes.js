const { Router } = require("express");
const router = Router();
const userControllers = require("../controllers/userControllers");
const upload = require("../middleware/userMiddleware/upload");

router.get("/user/info", userControllers.user_info_get);
router.put("/user/info", userControllers.user_info_put);
router.post("/user/verify", userControllers.verify_user_post);
router.get("/user/verify/:id", userControllers.verify_user_get);
router.post("/user/upload", upload.single("image_profile"), userControllers.user_profile_img_post);

module.exports = router;
