const { Router } = require("express");
const router = Router();
const academiesControllers = require("../controllers/AcademiesControllers");

router.post("/academies", academiesControllers.academies_post);

module.exports = router;
