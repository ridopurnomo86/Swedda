const User = require("../../models/userSchema");
const verifyToken = require("../../modules/verifyToken");
const filterData = require("../../modules/filterData");

module.exports.user_info_get = async (req, res, next) => {
	const token = await req.cookies["swedda-login"];
	const userId = verifyToken(token).id;
	const userInfo = await User.findById(userId);

	const filteredKeys = ["_id", "username", "email", "gender", "is_verified"];
	const info = filterData(filteredKeys, userInfo);

	if (userInfo) return res.status(200).json({ message: "Success", res: info });
	if (!userInfo) return res.status(500).json({ message: "User Not Found" });
	next();
};
