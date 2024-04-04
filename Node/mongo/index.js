   
const mongoose=require('mongoose');
const express= require("express");
const userRouter = require('./router/routes')


const app=express();

 //  ----------------------   CONNECT DATABASE WITH EXPRESS APP
mongoose
.connect('mongodb://127.0.0.1:27017/firstConnection')
.then(()=>console.log("firstConnection-Successfull Connected"))
.catch((err)=> console.log("firstConnection-Failed",err));

 // -------------------- CREATE SCHEMA -------------------------

// const userSchema = new mongoose.Schema({   
//   firstName:{
//     type:String,
//     required:true,
//   },
//   lastName:{
//     type:String,
//   }, rollNo:{
//     type:Number,
//      require:true,
//      unique:true,
//   },
//   email:{
//     type:String,
//     require:true,
//   }

// },{timestamps: true});

// const User=mongoose.model("user",userSchema) ///     CREATE MODEL

app.use(express.json());  //--------- MIDDLEWARE --------------------//

// --------------------------------- CREATE USER ---------------------------------------//
// app.post('/api/users', async (req,res)=>{
//   const { firstName, lastName, rollNo, email } = req.body;
//   if (!firstName || !lastName || !rollNo || !email) {
//     return res.status(400).json({ message: "Please provide all details" });
//   }

  
//     const result = await User.create({
//       firstName,
//       lastName,
//       rollNo,
//       email,
//     });
//     console.log(result);
//     return res.status(200).json({ message: "User created successfully" });
// })



// // --------------------------------- GET ALL USER NAME ---------------------------------------//

// app.get('/users', async (req,res)=>{
//   const allDbUsers = await User.find({});
//   const html=`<ul>
//   ${allDbUsers.map((user)=> `<li>${user.firstName} </li>`).join(" ")} 
//   </ul>`
  
// res.send(html);
// });


// // --------------------------------- GET ALL USERS ---------------------------------------//


// app.get('/api/users', async (req,res)=>{
//   const allDbUsers = await User.find({});
//   return res.json(allDbUsers)
  
// })


// // // --------------------------------- GET USER INFO USING ID AND UPDATE & DELETE ---------------------------------------//
// app.route('/api/users/:id')
// .get( async (req,res)=>{
//   const user=await User.findById(req.params.id);
//   return res.json(user);
// }).patch(async (req, res)=>{            // ------------- update user value -----------------
//      await User.findByIdAndUpdate(req.params.id, {lastName:"Khaby"});
//      return res.json({status:"Successfully changed moj kr"});
// }).delete(async (req,res)=>{
//   await User.findByIdAndDelete(req.params.id);
//   return res.json({status: 'Deleted'});   
// })



app.get('/',(req,res)=>{
  res.send("Hello Worild");
})
app.use('/user',userRouter)




app.listen(7300,()=>console.log("Server created")); 
