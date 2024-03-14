const express =require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const dotenv=require("dotenv");

const app=express();
dotenv.config();
const port=9000;
mongoose.connect("mongodb://localhost:27017/contactForm");

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});
const Register=mongoose.model("Register",userSchema);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/pages/index.html");
})
app.post('/register',async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        
       
            const newRegister=new Register({name,email,password
            });
           await newRegister.save();
           res.redirect("/success");
     
    
    }
    catch(error){
        console.log(error);
        res.redirect("error");
    }
})

app.get( "/success" , ( req , res ) =>{
  res.sendFile( __dirname + "/pages/success.html" );
});

app.get( "/error", ( req, res ) =>{
  res.sendFile( __dirname + "/pages/error.html" );
});




app.listen(port,()=>{
    console.log(`Server Started at http://localhost:${port}`);
})