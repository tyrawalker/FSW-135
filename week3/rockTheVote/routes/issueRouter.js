const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/issue')

//Get All
issueRouter.get('/', (req, res, next) => {
    Issue.find((err, items) =>{
        if(err){
            res.status(500)
            return next (err)
        }
        return res.status(200).send(items)
    })
})

//Get One
issueRouter.get("/:issue_ID", (req, res, next) =>{
    const issue_ID = req.params.issue._id
    const foundItem = items.find(item => item._id === issue_ID)
    if(!foundItem){
        const error = new Error(`This item cannot be found.`)
        res.status(500)
        return next (error)
    }
    return res.status(200).send(foundItem)
})

//Post One
issueRouter.post('/', (req, res, next)=>{
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
issueRouter.delete("/:issue_ID", (req, res, next) => {
    Issue.findOneAndDelete({_id: req.params.issue._id}, (err, deleteItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item from the Database`)
    })
})

//update one 
issueRouter.put("/:issue_ID", (req, res, next) =>{
    Issue.findOneAndUpdate(
        {_id: req.params.issue._id}, 
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

module.exports=  issueRouter; 