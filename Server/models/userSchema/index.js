const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		minlength: 8,
		required: [true, "username has Required..."],
	},
	email: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
		minlength: 8,
		required: [true, "Email has Required..."],
		validate: [isEmail, "Email isn't valid..."],
	},
	password: {
		type: String,
		unique: true,
		trim: true,
		minlength: 8,
		required: [true, "Password has Required..."],
	},
	gender: {
		type: String,
		default: null,
	},
	is_verified: {
		type: Boolean,
		default: null,
	},
	created_at: { type: Date },
	updated_at: { type: Date },
});

// fire a function Before doc save to database
userSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt();
	const dateNow = new Date();
	this.password = await bcrypt.hash(this.password, salt);
	this.created_at = dateNow;
	this.updated_at = dateNow;
	next();
});

// Function Static Login
userSchema.statics.login = async function (email, password) {
	const user = await this.findOne({ email });
	if (user) {
		const authPassword = await bcrypt.compare(password, user.password);
		// Password Match
		if (authPassword) {
			return user;
		}
		throw Error("Incorrect Password");
	}
	throw Error("Email Doesnt Exist");
};

// fire a function after doc save to database
// userSchema.post("save", function (doc, next) {
//   console.log("new User has created", doc);
//   next();
// });

const User = mongoose.model("user", userSchema);

module.exports = User;
