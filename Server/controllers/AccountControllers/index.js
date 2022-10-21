const User = require("../../models/userSchema");
const filterData = require("../../modules/filterData");
const createToken = require("../../modules/createToken");
const handleErrors = require("../../modules/handleError");

module.exports = {
	signup_post: async (req, res, next) => {
		const { username, email, password, name } = req.body;
		try {
			const user = await User.create({ name, username, email, password });
			if (!user) return res.status(500).send("Internal Server Error");
			res.status(200).json({
				user: user._id,
				message: "Success Create User",
			});
		} catch (error) {
			const errors = handleErrors(error);
			if (errors) return res.status(409).json({ message: errors.email || errors.password });
		}
		next();
	},
	signin_post: async (req, res, next) => {
		const { email, password } = req.body;
		try {
			const filteredKeys = ["username", "email", "gender", "is_verified"];
			const user = await User.login(email, password);
			const userInfo = filterData(filteredKeys, user);
			const token = createToken(user._id, userInfo);
			res.cookie(`${process.env.COOKIE_USER || "swedda_cust"}`, token, {
				maxAge: 18000000, // 5 Hours/ms,
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "none",
				domain: ".vercel.app",
			});
			res.status(200).json({ user: user._id, message: "Success Login", token });
		} catch (error) {
			const errors = handleErrors(error);
			res.status(401).json({ error: "Cannot Login", errorMessage: errors });
		}
		next();
	},
	logout_get: async (req, res, next) => {
		try {
			if (res.cookie) {
				res.cookie(`${process.env.COOKIE_USER || "swedda_cust"}`, "", { maxAge: 0 });
				res.status(200).json({
					message: "Success Logout",
				});
			}
		} catch (error) {
			res.status(500).send("Internal Server Error");
		}
		next();
	},
};
