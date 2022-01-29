const mongoose = require("mongoose");
require("dotenv").config();

// username: admin
// password: J9ob6bhjiVIajwj1

const connection = mongoose
	.connect(process.env.MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Database is Connected");
	})
	.catch((err) => {
		console.log(err);
	});

module.exports = connection;
