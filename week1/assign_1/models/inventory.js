const { ObjectID } = require("bson")
const mongoose = require("mongoose")
//const { stringify } = require("node:querystring")
const Schema = mongoose.Schema

//inventory schema
const inventorySchema = newSchema({
    productId:{
        type:ObjectID,
        required:true
    },
    sku:{
        type:Number, 
        required:true
    }, 
    productName:{
        type:String, 
        required:true
    }, 
    productDescription:{
        type:String, 
        required:true
    }, 
    unitPrice:{
        type:Number, 
        required:true
    }, 
    MSRP:{
        type:Number, 
        required:true
    }, 
    Discount:{
        type:Number, 
        required:null
    }, 
    unitWeight:{
        type:Number, 
        required:true
    }, 
    picture:{
        type:String, 
        required:true
    }, 
    note:{
        type:String, 
        required:null
    }


})

module.exports = mongoose.model('Inventory', inventorySchema)