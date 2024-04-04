const express= require("express");
const URL = require("./models/url")
const urlRoute =require('./routes/url')
const mongoose=require("mongoose");

const app=express();
mongoose.connect("mongodb://127.0.0.1:27017/urlShortner").then(()=> console.log("Db Connected")).catch((err)=> console.log("Db not connected"+err));
app.use(express.json());
app.use('/url', urlRoute);

app.get('/:shortId',async (req,res)=>{
const shortId=req.params.shortId;
const entry=await URL.findOneAndUpdate({
    shortId,
},{
    $push:{
        visitHistory:{
            timestamp:Date.now(),
        },
    },
}
)
res.send(entry);
})

app.listen(8001,()=>console.log("Server started in port 8100"))