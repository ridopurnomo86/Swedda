const requireAuth = (req, res, next) => {
	const token = req.cookies[`${process.env.COOKIE_USER || "swedda_cust"}`];
	if (token) return next();
	return res.status(401).json({
		type: "Unauthorized",
		message: "Unauthorized",
	});
};

module.exports = requireAuth;
