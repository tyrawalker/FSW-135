//required 
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//new schema
const userSchema = new Schema ({
    firstName: {
        type: String,
        required = true

    }, 
    lastName:{
        type:String, 
        required = true
    }, 
    userName:{
        type: String, 
        required: true
    }, 
    password:{
        type:String,
        required:true
    },
    emailAddress:{
        type:String, 
        required: true
    }, 
    age:{
        type: Number, 
        min: 18
    }, 
    _id:{
        type: String, 
        required: true
    }
})

module.exports = mongoose.model("User", userSchema)