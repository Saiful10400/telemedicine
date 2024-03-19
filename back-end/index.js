const express=require("express")
const  port=process.env.port || 5000
const {createServer}=require("http")
const { Server } = require("socket.io");


const app=express()

const server=createServer(app)
const io=new Server(server)

// socket io handle.
io.on("connection",(socket)=>{
    console.log("a user is connected.")
})

// routes.
app.get("/",async(req,res)=>{
    res.sendFile("index.html",{root:"html"})
  })





server.listen(port,()=>{
    console.log("this server is running.")
}) 