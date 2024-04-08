const mongoose= require('mongoose');


const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            requird:true
          
        },
        email:{
type:String,
required:true,
unique:true
        },
        password:{
            type:String,
            required:true
        }
    },{timestamp:true}
) 

const User=mongoose.model('user',userSchema)

module.exports=User