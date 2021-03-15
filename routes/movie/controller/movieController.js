const Movie = require("../model/Movie");

module.exports = {
	createList: async (req, res) => {
		try {
			let newMovie = new Movie({
				movie: req.body.movie,
			});

			let newCreatedMovie = await newMovie.save();

			res.json({
				newCreatedMovie,
			});
		} catch (e) {
			console.log(e);
			res.status(500).json({ error: e.message });
		}
	},
	getList: async (req, res) => {
		try {
			let allList = await Movie.find({});

			res.json({
				allList: allList,
			});
		} catch (e) {
			console.log(e);
			res.status(500).json({ error: e.message });
		}
	},
};
