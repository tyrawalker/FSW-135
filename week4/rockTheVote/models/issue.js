const mongoose = require("mongoose")
const Schema = mongoose.Schema

const issueSchema = new Schema ({
    _id: {
        type:String, 
        required: true
    }, 
    title:{
        type: String, 
        required: true
    }, 
    body:{
        type: String, 
        required: true
    }, 
    user:{
        type:Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    }
    
})

module.exports = mongoose.model("Issue", issueSchema)