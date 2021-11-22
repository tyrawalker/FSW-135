const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
    _id:{
        type: String, 
        required: true
    }, 
    body:{
        type:String, 
        required: true
    }, 
    user:{
        type:Schema.Types.ObjectId, 
        ref:'User', 
        required: true
    }, 
    relatedIssue:{
        type: Schema.Types.ObjectId, 
        ref:"Issue", 
        required:true
    }

})
module.exports = mongoose.model("Comment", commentSchema)