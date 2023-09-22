const express = require('express');
const serverConfig = require('./Configs/server.config')
const mongoose = require('mongoose')
const dbConfig = require('./Configs/db.config');

const app = express();

/**
 * Logic to connect to mongoDB and create an admin user
 * Need to have mongoDb up and running in your local machine
 */
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection ;

db.on("error", ()=>{
    console.log("Error while connecting to Database");
});

db.once("open", ()=>{
    console.log("Database is connected");
});




app.listen(serverConfig.PORT, ()=>{
    console.log(`server started on the port number ${serverConfig.PORT}` );
})