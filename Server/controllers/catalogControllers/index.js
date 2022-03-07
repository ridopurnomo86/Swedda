const supabase = require("../../config/Supabase");
const { randomUUID } = require("crypto");

module.exports.catalog_get = async (req, res) => {
	const { data } = await supabase.from("catalog").select();
	if (data) return res.status(200).json({ message: "Success", data });
	return res.status(500).send("Internal Server Error");
};

module.exports.catalog_by_id_get = async (req, res) => {
	const { id } = await req.params;
	const { data } = await supabase.from("catalog").select().eq("catalog_id", `${id}`);
	if (data) return res.status(200).json({ message: "Success", data: data[0] });
	return res.status(500).send("Internal Server Error");
};

module.exports.catalog_comment_get = async (req, res) => {
	const { id } = await req.params;
	const { data } = await supabase.from("catalog").select("comment").eq("catalog_id", `${id}`);
	if (data) return res.status(200).json({ message: "Success", data: data[0].comment });
	return res.status(500).send("Internal Server Error");
};

module.exports.catalog_comment_post = async (req, res) => {
	const { id } = await req.params;
	const uuid = randomUUID();
	const { title, comment } = await req.body;

	const { data, error } = await supabase
		.from("catalog")
		.update([
			{
				comment: [
					{
						comment_id: uuid,
						title,
						content_text: comment,
					},
				],
			},
		])
		.eq("catalog_id", `${id}`);
	if (data) return res.status(200).json({ message: "Success", data });
	if (error) return res.status(500).send(error);
	return res.status(500).send("Internal Server Error");
};
