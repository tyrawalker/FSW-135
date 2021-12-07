const express = require('express')
const User = require('../models/user')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')

//signup
authRouter.post("/signup", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
      if(err){
        res.status(500)
        return next(err)
      }
      if(user){
        res.status(403)
        return next(new Error('Username Already Exists'))
      }
      const newUser = new User(req.body)
      newUser.save((err, savedUser) => {
        if(err){
          res.status(500)
          return next(err)
        }
        const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
        return res.status(201).send({ token, user: savedUser })
      })
    })
  })
  

// Login
authRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
      if(err){
        res.status(500)
        return next(err)
      }
      if(!user || req.body.password !== user.password){
        res.status(403)
        return next(new Error('Invalid Credentials'))
      }
      const token = jwt.sign(user.toObject(), process.env.SECRET)
      return res.status(200).send({ token, user })
    })
  })

  //get one credential validation
  authRouter.get("/:comment_ID", (req, res, next) =>{
        const error = new Error(`This method should not be envoked`)
        res.status(403)
        return next (error)
})

//Post credential validation
authRouter.post('/', (req, res, next)=>{
  const error = new Error(`This method should not be envoked`)
        res.status(403)
        return next (error)
})


//Delete One credential validation
authRouter.delete("/:comment_ID", (req, res, next) => {
  const error = new Error(`This method should not be envoked`)
        res.status(403)
        return next (error)
})

//update one credential validation
authRouter.put("/:comment_ID", (req, res, next) =>{
  const error = new Error(`This method should not be envoked`)
        res.status(403)
        return next (error)
})


module.exports = authRouter