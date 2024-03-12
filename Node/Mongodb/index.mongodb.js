//------------------CRUD -------------------------

use("newFile");
//console.log(db)

// db.createCollection("courses")
// db.courses.insertOne({
//     name:"Gulshan Web Dev Course",
//     price:"$1000M",
//     chapters:12,
//     duration:"900h",
//     projects:"to-do-list, calculator, weather-app",
// })
// db.courses.insertMany([{
//     name:"Gulshan Android Dev Course",
//     price:"$1000B",
//     chapters:128,
//     duration:"9000h",
//     projects:"Widget, calculator, weather-app",
// },{
//     name:"Gulshan DSA Course",
//     price:"$1000M",
//     chapters:"14",
//     duration:"9min",
//     projects:"array-reverse,loops,if",
// },{
//     name:"Gulshan DSA Course",
//     price:"$1000M",
//     chapters:"19",
//     duration:"9min",
//     projects:"array-reverse,loops,if",
// }])

// let a = db.courses.find({ chapters: 12 });
// // console.log(a);
// console.log(a.count());
// db.courses.update({chapters: 12},{$set:{chapters:19}});


// db.courses.deleteMany({chapters:19})





//--------------------Using Mongoose----------------------

import mongoose from "mongoose";
import express from 'express';
let a = await mongoose.connect("mongodb://localhost:27017/")

const app=express();
app.get("/",(req,res)=>{
    res.send("Hello");
});

app.listen(7100,()=> console.log("Mongoose express Connection"));


