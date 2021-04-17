

// Connect to MongoDB database
mongoose
.connect(process.env.MONGO_URI, { useNewUrlParser: true })
.then(() =>  console.log(`MongoDB on`))
.catch(err => console.log(`Err: ${err}`));

module.exports = mongoose;