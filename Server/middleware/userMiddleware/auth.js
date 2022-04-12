const verifyToken = require("../../modules/verifyToken");

const requireAuth = (req, res, next) => {
	const token = req.cookies["swedda-login"];
	const userId = verifyToken(token).id;
	if (userId) return next();
	return res.status(500).send("Internal Server Error");
};

module.exports = requireAuth;
