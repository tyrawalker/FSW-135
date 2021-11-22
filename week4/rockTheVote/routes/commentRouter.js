const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment')

//Get All
commentRouter.get('/', (req, res, next) => {
    Comment.find((err, items) =>{
        if(err){
            res.status(500)
            return next (err)
        }
        return res.status(200).send(items)
    })
})

//Get One
commentRouter.get("/:comment_ID", (req, res, next) =>{
    const comment_ID = req.params.comment._id
    const foundItem = items.find(item => item._id === comment_ID)
    if(!foundItem){
        const error = new Error(`This item cannot be found.`)
        res.status(500)
        return next (error)
    }
    return res.status(200).send(foundItem)
})

//Post One
commentRouter.post('/', (req, res, next)=>{
    req.body.user = req.user._id
    const newItem = new Item (req.body)
    newItem.save((err, saveItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(saveItem)
    })
})


//Delete One
commentRouter.delete("/:comment_ID", (req, res, next) => {
    Comment.findOneAndDelete({_id: req.params.comment._id}, (err, deleteItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item from the Database`)
    })
})

//update one 
commentRouter.put("/:comment_ID", (req, res, next) =>{
    Comment.findOneAndUpdate(
        {_id: req.params.comment._id}, 
         req.body.user = req.user._id,
         req.body, 
         {new:true}, 
         (err, updatedItem) =>{
            if (err){
                res.status (500)
             return next (err)
            }
            return res.status(201).send(updatedItem)
        }
)
})

module.exports=  commentRouter; 