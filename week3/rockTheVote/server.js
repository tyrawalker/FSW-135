//App will not launch becuase of error on ln 27. see notes. was unable to populate new user in postman.
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
mongoose.connect('mongodb://localhost:27017/rockthevotedb', {
    useNewUrlParser:true, 
    useUnifiedTopology:true, 
    unCreateIndex:true, 
    useFindAndModify:false
}, 
()=> console.log ("connected to DB")
)

//routes 
//ERROR secret should be set at Object.<anonymous> (C:\Users\tyran\Bryan_University\Dev\FSW-135\rockTheVote\server.js:25:17)
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
app.listen(9000,() => {
    console.log("Server is running on 9000")
} )
