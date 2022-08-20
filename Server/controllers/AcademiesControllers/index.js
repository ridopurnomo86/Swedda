const verifyToken = require("../../modules/verifyToken");

module.exports = {
	academies_post: (req, res, next) => {
		const authHeader = req.headers["authorization"];
		const token = authHeader && authHeader.split(" ")[1];

		if (token === null || !token) {
			res.status(401).json({
				type: "error",
				message: "Unauthorize",
			});
		}

		const userVerify = verifyToken(token).is_verified;

		if (userVerify === false) {
			res.status(401).json({
				type: "error",
				message: "User need verify the email",
			});
		} else {
			res.status(200).json({
				type: "success",
				message: "Success",
			});
		}

		next();
	},
};
