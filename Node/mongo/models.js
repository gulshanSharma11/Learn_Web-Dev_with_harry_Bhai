const mongoose=require("mongoose");


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
  
  },{timestamps: true});

  const User=mongoose.model("user",userSchema);

  module.exports=User;

