 
var express=require("express");
var app=express();

app.get("/",(req,res)=>{
// res.send("Hello I am the voice of server");

res.sendFile("new-app/index.html",{root:__dirname});
console.log('Hello');
})

app.listen(7100,()=> console.log("Hello I am not a voice of server"));