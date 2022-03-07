const { Router } = require("express");
const router = Router();
const catalogControllers = require("../controllers/catalogControllers");

router.get("/catalog", catalogControllers.catalog_get);
router.get("/catalog/:id", catalogControllers.catalog_by_id_get);
router.get("/catalog/:id/comments", catalogControllers.catalog_comment_get);
router.post("/catalog/:id/comment", catalogControllers.catalog_comment_post);

module.exports = router;
