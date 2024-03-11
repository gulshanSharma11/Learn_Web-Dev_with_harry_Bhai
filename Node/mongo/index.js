const http=require("http");     
const mongoose=require("mongoose");
const userSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required:true,
  },
  lastName:{
    type:String,
  },

});



const myServer=http.createServer((req, res)=>{
    console.log("req successful");

    res.end("Hello i am Server");
});

myServer.listen(5600);