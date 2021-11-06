const express = require ("express")
const app = express ()
const morgan = require ("morgan")
const mongoose = require ("mongoose")

//middleware 
app.use(express.json())
app.use(morgan('dev'))

//connect to db (can we call this db anything we like?)
mongoose.connect('mongodb://localhost:27017/inventorydb', {
    useNewUrlParser:true, 
    useUnifiedTopology:true, 
    unCreateIndex:true, 
    useFindAndModify:false
}, 
()=> console.log ("connected to DB")
)

//routes
app.use("/inventory", require("./routes/inventoryRouter.js"))

//error handling
app.use((err, req, res, next) =>{
    console.log(err)
    return res.send({errMsg: err.message})
})

//server listen
app.listen(9000,() => {
    console.log("Server is running on 9000")
} )