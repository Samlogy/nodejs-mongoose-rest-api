// Dependencies
const express = require('express');
const dotenv = require('dotenv').config( { path : './config.dev.env'} );
const morgan = require('morgan');


// Import DB setup & connection
const connectDB = require('./src/config/db_setup');
connectDB(); 

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.set('view engine', 'ejs');

// log requests
if (process.env.ENV === 'dev') app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
	res.status(200).json('zehaha zehhaha !')
});

const postRoutes = require('./src/routers/post.route');
app.use('/api', postRoutes);


// handling inexistant routes
// app.all('*', (req, res, next) => {
// 	// if we pass something to next() express will assume it is an error object and call Global error handling middlware immedialtly
// 	next(new AppError(`the url ${req.originalUrl} is not found`, 404))
// });

// Server port setup
const PORT = process.env.SERVER_PORT |001;
app.listen(PORT, ()=> { console.log(`🚀 Server on -> ${PORT}`)});