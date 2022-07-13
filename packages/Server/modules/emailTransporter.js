const nodemailer = require("nodemailer");

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

module.exports = transporter;
