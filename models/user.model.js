/*
    This will hold the schema for the user

    It explains the different fields of the user and how it will be stored in the mongoDB
*/

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    userId : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        minLength : 10,
        lowercase : true
    },
    userType : {
        type : String,
        required : true,
        deafult : "CUSTOMER",
        enum : ["CUSTOMER", "ADMIN"]
    }


},{timestamps : true})

/**
 * Define the collection name where it will be stored 
 */

module.exports = mongoose.model("user", userSchema); // defines the collectuon in which this schema will be used