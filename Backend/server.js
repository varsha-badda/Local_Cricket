const express = require("express")
const connectToDB = require("./config/db")

const app = express()
connectToDB

app.get('/',(req,res)=>{
    res.send("Hello world!")
})


app.listen(4000,()=>{
    console.log("server is running")
})