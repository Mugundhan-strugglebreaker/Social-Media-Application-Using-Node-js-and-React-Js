const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv =  require("dotenv")
const morgan = require("morgan")
const helmet = require("helmet")

dotenv.config()

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser : true},()=>{
    console.log("Connected to monogoDb");
});


//middleware
app.use(express.json())
app.use(morgan())
app.use(helmet())


app.listen(8800,()=>{
    console.log("Back end service running");
})