const User = require('../models/user.model');


// get All
const getAll = (req, res) => {
	try {
		const users = await User.find();
		res.send(users);
	} catch (err) {
		res.status(500).send({ message: err.message || "Some error occurred while retrieving users." });
	}
};
// get One
const getOne = async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id })
		res.send(user);
	} catch(err) {
		res.status(404).send({ message:  err.mesage || "User doesn't exist!" })
	}
};

// Create
const create = async (req, res) => {
	const newUser = new User({
		...req.body
	});

	try {
		await newUser.save();
		res.status(200).json(`Created : ${newUser}`);
	} catch(err) {
		res.status(400).send({ message:  err.mesage });
	}
};

// edit
const edit = async (req, res) => {
	// const editUser = new User({
	// 	...req.body
	// });
	try {
		const user = await User.findOne({ _id: req.params.id });

		if (req.body.title) post.title = req.body.title
		if (req.body.content) post.content = req.body.content

		await user.save();
		res.send(user);
	} catch(err) {
		res.status(404).send({ message:  err.mesage });
	}
};

const remove = async (req, res) => {
	try {
		await User.deleteOne({ _id: req.params.id });
		res.status(204).send();
	} catch (err) {
	  res.status(400).json({ message: err.message })
	}
};


module.exports = { create, getOne, getAll, edit, remove };