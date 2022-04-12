const multer = require("multer");
const path = require("path");

const maxSize = 512 * 512;

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../../public/uploads"));
	},
	filename: function (req, file, cb) {
		cb(null, `${new Date().toISOString()}-${file.originalname}`);
	},
});

const fileFilter = (req, file, cb) => {
	const filetypes = /jpeg|jpg|png|gif/;

	// Check ext
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	// Check mime
	const mimetype = filetypes.test(file.mimetype);

	if (mimetype && extname) {
		return cb(null, true);
	} else {
		cb("Error: Images Only!");
	}
};

const upload = multer({ storage: storage, limits: maxSize, fileFilter });

module.exports = upload;
