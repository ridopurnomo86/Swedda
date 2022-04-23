const { Router } = require("express");
const router = Router();
const catalogControllers = require("../controllers/CatalogControllers");
const requireAuth = require("../middleware/auth");

router.get("/catalog", catalogControllers.catalog_get);
router.get("/catalog/:id", catalogControllers.catalog_by_id_get);
router.get("/catalog/:id/comments", catalogControllers.catalog_comment_get);
router.post("/catalog/:id/comment", requireAuth, catalogControllers.catalog_comment_post);

module.exports = router;
