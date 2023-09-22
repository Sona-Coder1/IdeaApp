const express  = require('express');
const serverConfig =require('./configs/server.config');
const mongoose = require('mongoose');
const dbConfig = require('./Configs/db.config');
const userModel = require('./models/user.model');


const app = express();


/**
 * Logic to connect to MongoDB and create an ADMIN user
 * Need to have the mongodb up and running in your local machine
 */
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection ;

db.on("error", ()=>{
    console.log("Error while connecting to DB");
});

db.once("open", ()=>{
    console.log("DB is connected");

    init();
})

async function  init(){
    
    /**
     * Check if the admin user is already present
     */
    let admin = await userModel.findOne({
        userId : "admin"
    })

    if(admin){
        console.log("Admin user already present");
        return;
    }

    admin = await userModel.create( {
        name : "Sona Pathak",
        userId : "admin",
        email : "sonapathak49@gmail.com",
        userType : "ADMIN",
        password : "Welcome"
    });
    console.log(admin);

    
}



app.listen(serverConfig.PORT, ()=>{
    console.log(`server started on the port number ${serverConfig.PORT}`);
})