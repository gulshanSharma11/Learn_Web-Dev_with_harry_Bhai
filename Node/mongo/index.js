const http=require("http");     
const mongoose=require("mongoose");
mongoose
.connect('mongodb://127.0.0.1:27017/firstConnection')
.then(()=>console.log("firstConnection-Successfull"))
.catch((err)=> console.log("firstConnection-Failed",err));

const userSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required:true,
  },
  lastName:{
    type:String,
  }, rollNo:{
    type:Number,
     require:true,
     unique:true,
  },
  email:{
    type:String,
    require:true,
  }

});
const user=mongoose.model("user",userSchema)



const myServer=http.createServer((req, res)=>{
    console.log("req successful");

    res.end("Hello i am Server");
});

myServer.listen(7600);