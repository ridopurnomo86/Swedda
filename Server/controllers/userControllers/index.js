const User = require("../../models/userSchema");
const verifyToken = require("../../modules/verifyToken");
const filterData = require("../../modules/filterData");
const nodemailer = require("nodemailer");

module.exports.user_info_get = async (req, res) => {
	const token = await req.cookies["swedda-login"];

	if (token) {
		const userId = verifyToken(token).id;
		const userInfo = await User.findById(userId);
		const filteredKeys = ["_id", "username", "email", "gender", "is_verified"];
		const info = filterData(filteredKeys, userInfo);

		if (userInfo) return res.status(200).json({ message: "Success", info });
		if (!userInfo) return res.status(500).json({ message: "User Not Found" });
	}
	return res.status(500).send("Internal Server Error");
};

module.exports.verify_user_post = async (req, res) => {
	const token = await req.cookies["swedda-login"];
	const verifyCredential = await verifyToken(token);
	const { email } = verifyCredential;

	const currentUrl = "http://localhost:5454";

	const htmlPage = `
		<p>Verify your email address to see fully our content and many more.</p>
		<p>This link <b>expires in 6 hours.</b></p>
		<p>Press this <a href=${currentUrl}/user/verify/${token}>link</a> to confirmation</p>
	`;

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER_NODEMAILER,
			pass: process.env.PASSWORD_USER_NODEMAILER,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	try {
		if (token && email) {
			const info = await transporter.sendMail({
				from: `Swedda-Team ${process.env.EMAIL_USER_NODEMAILER}`,
				to: email,
				subject: "Email Verification Swedda",
				html: htmlPage,
			});
			res.status(200).json({ infoId: info.messageId, message: "Send Verification To Email" });
		}
		if (!token || !email) return res.status(500).send("Internal Server Error");
	} catch (error) {
		return res.status(500).send("Internal Server Error");
	}
};

module.exports.verify_user_get = async (req, res) => {
	const { id: token } = req.params;
	const currentId = await verifyToken(token).id;

	if (currentId) {
		await User.findByIdAndUpdate(currentId, { is_verified: true }, (err, docs) => {
			if (docs.is_verified === true)
				return res.status(200).json({ message: "User Has Verified" });
			if (err) return res.status(500).send("Internal Server Error");
			return res.status(200).json({ message: "User Is Verified" });
		});
	}
	return res.status(500).send("Internal Server Error");
};
