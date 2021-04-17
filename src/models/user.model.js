const { Schema, model } = require('mongoose');

// schema
const postSchema = Schema({
	title: String,
	content: String,
    createdAt: Date
});

// turn _id -> id
postSchema.method("toJSON", () => {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Post = model('Post', (this.schema = postSchema), (this.collection = 'post'))

module.exports = Post;