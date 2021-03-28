const { connect } = require('mongoose');

/******************* Mongoose *******************/
const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await connect(process.env.ATLAS_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB ON!: ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

/******************* Type ORM *******************/
import { createConnection, Connection } from "typeorm";

import userOrmSchema from '../models/userOrmModel';

const connectORM = await createConnection({
    type: "mysql", // "postgres"
    host: process.env.ORM_HOST,
    port: process.env.ORM_PORT,
    username: process.env.ORM_USERNAME,
    password: process.env.ORM_,
    database: process.env.ORM_DB_NAME,
    entities: [userOrmSchema]
});

module.exports = { connectDB, connectORM }