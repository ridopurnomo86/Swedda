const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoConnection = require("./config/MongoDB");
const routes = require("./routes");
const path = require("path");
const app = express();
require("dotenv").config();

app.use(cookieParser());
app.use(helmet());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));
app.set("trust proxy", 1);
async () => await mongoConnection();

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", `${process.env.CLIENT_ORIGIN}`);
	res.header("Access-Control-Allow-Credentials", true);
	res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get("/", (req, res) => {
	res.status(200).json("Server is Running");
});

app.use(routes);

const PORT = process.env.PORT || 5454;

const server = app.listen(PORT, console.log(`Running on Port ${PORT}`));

module.exports = server;
