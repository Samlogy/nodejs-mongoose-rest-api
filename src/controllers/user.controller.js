const Post = require('../models/post.model');

module.exports = {
		// Get all posts
		getAll: async (req, res) => {
			const posts = await Post.find();
			res.send(posts);
		},

		// POST
		create:  async (req, res) => {
			const post = new Post({
				...req.body,
				createdAt: new Date.now
			});

			await post.save();
			res.send(post);
		},
		
		// GET ONE
		getOne: async (req, res) => {
			try {
				const post = await Post.findOne({ _id: req.params.id });
				res.send(post);
			} catch {
				res.status(404)
				res.send({ error: "Post doesn't exist!" })
			}
		},
 
		// Update One
		updateOne: async (req, res) => {
			try {
				const post = await Post.findOne({ _id: req.params.id });

				if (req.body.title) post.title = req.body.title;
				if (req.body.content) post.content = req.body.content;

				await post.save();
				res.send(post);
			} catch {
				res.status(404)
				res.send({ error: "Post doesn't exist!" })
			}
		},

		// Delete one
		deleteOne: async (req, res) => {
			try {
				await Post.deleteOne({ _id: req.params.id });
				res.status(204).send();

			} catch {
				res.status(404)
				res.send({ error: "Post doesn't exist!" })
			}
		}	
};