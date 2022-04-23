const User = require("../../models/userSchema");
const verifyToken = require("../../modules/verifyToken");
const filterData = require("../../modules/filterData");
const transporter = require("../../modules/emailTransporter");
const cloudinary = require("../../config/Cloudinary");
const fs = require("fs");

module.exports = {
	user_info_get: async (req, res, next) => {
		const token = await req.cookies["swedda-login"];
		try {
			if (token) {
				const userId = verifyToken(token).id;
				const userInfo = await User.findById(userId);
				const filteredKeys = ["_id", "username", "email", "gender", "is_verified"];
				const info = filterData(filteredKeys, userInfo);

				if (userInfo) return res.status(200).json({ message: "Success", info });
				if (!userInfo) return res.status(500).json({ message: "User Not Found" });
			}
		} catch (err) {
			if (err) return res.status(500).send("Internal Server Error");
		}
		next();
	},
	user_info_put: async (req, res, next) => {
		const token = await req.cookies["swedda-login"];
		const body = req.body;
		try {
			if (token) {
				const userId = verifyToken(token).id;
				const userInfo = await User.findByIdAndUpdate(userId, body, { new: true });

				if (userInfo) return res.status(200).json({ message: "Success" });
				if (!userInfo) return res.status(500).send("Internal Server Error");
			}
		} catch (err) {
			if (err) return res.status(500).send("Internal Server Error");
		}
		next();
	},
	user_profile_img_post: async (req, res, next) => {
		const token = await req.cookies["swedda-login"];
		if (token) {
			const userId = verifyToken(token).id;
			await cloudinary.uploader.upload(
				`${req.file.path}`,
				{ public_id: userId, folder: "avatars" },
				(err, result) => {
					if (result) {
						fs.unlinkSync(req.file.path);
						res.status(200).json({
							message: "Success Uploaded",
							result,
						});
					}
					if (err) {
						fs.unlinkSync(req.file.path);
						res.status(400).json({
							messge: "someting went wrong while upload Image",
							data: err,
						});
					}
				}
			);
		} else {
			fs.unlinkSync(req.file.path);
			res.status(500).send("Internal Server Error");
		}
		next();
	},
	verify_user_post: async (req, res) => {
		const token = await req.cookies["swedda-login"];
		const verifyCredential = verifyToken(token);
		const { email } = verifyCredential;

		const currentUrl = "http://localhost:5454";

		const htmlPage = `
			<p>Verify your email address to see fully our content and many more.</p>
			<p>This link <b>expires in 6 hours.</b></p>
			<p>Press this <a href=${currentUrl}/user/verify/${token}>link</a> to confirmation</p>
		`;

		try {
			if (token && email) {
				const info = await transporter.sendMail({
					from: `Swedda-Team ${process.env.EMAIL_USER_NODEMAILER}`,
					to: email,
					subject: "Email Verification Swedda",
					html: htmlPage,
				});
				res.status(200).json({
					infoId: info.messageId,
					message: "Send Verification To Email",
				});
			}
			if (!token || !email) return res.status(500).send("Internal Server Error");
		} catch (err) {
			if (err) return res.status(500).send("Internal Server Error");
		}
	},
	verify_user_get: async (req, res) => {
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
	},
};
