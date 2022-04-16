const requireAuth = (req, res, next) => {
	const token = req.cookies["swedda-login"];
	if (token) return next();
	return res.status(500).send("Internal Server Error");
};

module.exports = requireAuth;
