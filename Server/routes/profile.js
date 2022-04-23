const { Router } = require("express");
const router = Router();
const profileControllers = require("../controllers/ProfileControllers");
const upload = require("../middleware/upload");

router.get("/user/info", profileControllers.user_info_get);
router.put("/user/info", profileControllers.user_info_put);
router.post("/user/verify", profileControllers.verify_user_post);
router.get("/user/verify/:id", profileControllers.verify_user_get);
router.post(
	"/user/upload",
	upload.single("image_profile"),
	profileControllers.user_profile_img_post
);

module.exports = router;
