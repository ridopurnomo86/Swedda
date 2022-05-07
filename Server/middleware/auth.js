const requireAuth = (req, res, next) => {
	const token = req.cookies["swedda-login"];
	if (token) return next();
	return res.status(401).json({
		type: "Unauthorized",
		message: "Unauthorized",
	});
};

module.exports = requireAuth;
