//required
require('dotenv').config()
const express = require ("express")
const app = express ()
const morgan = require ("morgan")
const mongoose = require ("mongoose")
const expressJwt = require('express-jwt')


//middleware 
app.use(express.json())
app.use(morgan('dev'))

//connect to db 
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/rockthevotedb');
    console.log("Connected to the DB")
}

//routes 
app.use('/api', expressJwt({secret:process.env.SECRET, algorithms:['RS256']}))
app.use('/auth', require ('./routes/authRouter'))
app.use("api/comment", require("./routes/commentRouter"))
app.use("api/issue", require("./routes/issueRouter"))

//error handling
app.use((err, req, res, next) =>{
    console.log(err)
    if(err.name === "Unauthorized Error"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

//server listen
app.listen(8000,() => {
    console.log("Server is running on 8000")
} )
