const { Schema, model } = require('mongoose')
const validator = require('validator')

const userSchema = new Schema({
    complete_name: {
		type: String,
		minlength: [3, 'the name must have more or equal than 3 characters'],
		maxlength: [15, 'the name must have less or equal than 15 characters'],
		required: [true, 'the Complete Name is required'],
		trim: true
	},
	username: {
		type: String,
	},
	email: {
		type: String,
		required: [true, 'Please enter your email.'],
		lowercase: true,
		validate: [validator.isEmail, 'Please enter a valid email.'],
		unique: [true, 'This email already used, please choose another one.'],
		trim: true
	},
	avatar: {
		type: String,
		validate: [validator.isURL, 'not a valid URL']
	},
	role: {
		type: String,
		enum: ['user', 'author', 'moderator', 'admin'],
		default: 'user'
	},
	password: {
		type: String,
		required: [true, 'please enter your password'],
		minlength: [6, 'Min length 6'],
		select: false // very important : not show in any request
	},
	active: {
		type: Boolean,
		default: true,
		select: false
	},
    createdAt: {
        type: Date,
        default: Date.now
    },
    editedAt: [{
        type: Date,
        default: null
    }],
	resetPasswordToken: {
		type: String,
		default: null,
		select: false
	},
	accountActivated: {
		type: Boolean, 
		default: false
	},
});


const User = model('User', (this.schema = userSchema), (this.collection = 'user'))

module.exports = User;