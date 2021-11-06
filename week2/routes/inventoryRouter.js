const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')

//Get All
inventoryRouter.get('/', (req, res, next) => {
    Inventory.find((err, items) =>{
        if(err){
            res.status(500)
            return next (err)
        }
        return res.status(200).send(items)
    })
})

//Get One
inventoryRouter.get("/:inventoryID", (req, res, next) =>{
    const inventoryID = req.params.inventoryID
    const foundItem = items.find(item => item._id === inventoryID)
    if(!foundItem){
        const error = new Error(`This item cannot be found.`)
        res.status(500)
        return next (error)
    }
    return res.status(200).send(foundItem)
})

//Post One
inventoryRouter.post('/', (req, res, next)=>{
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
inventoryRouter.delete("/:inventoryID", (req, res, next) => {
    Inventory.findOneAndDelete({_id: req.params.inventoryID}, (err, deleteItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item from the Database`)
    })
})

//update one 
inventoryRouter.put("/:inventoryID", (req, res, next) =>{
    Inventory.findOneAndUpdate(
        {_id: req.params.inventoryID}, 
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

module.exports=  inventoryRouter; 