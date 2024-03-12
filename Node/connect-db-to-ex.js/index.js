import mongoose from "mongoose";
import express from "express";
const app=express();
let a =await mongoose.connect("mongodb://localhost/todo")
app.get("/",(req,res)=>{
    res.send("Hello Ji");
})

app.listen(7100,()=> console.log("Connection with db to express"));