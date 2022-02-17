const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv =  require("dotenv")
const morgan = require("morgan")
const helmet = require("helmet")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

dotenv.config()

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser : true},()=>{
    console.log("Connected to monogoDb");
});


//middleware
app.use(express.json())
app.use(morgan("common"))
app.use(helmet())

app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)

app.listen(8800,()=>{
    console.log("Back end service running");
})