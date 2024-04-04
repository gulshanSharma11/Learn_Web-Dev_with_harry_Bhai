const express=require('express');
const mongoose=require("mongoose");
const router=express.Router();
const User=require('../models')


router.post('/', async (req,res)=>{
    const { firstName, lastName, rollNo, email } = req.body;
    if (!firstName || !lastName || !rollNo || !email) {
      return res.status(400).json({ message: "Please provide all details" });
    }
  
    
      const result = await User.create({
        firstName,
        lastName,
        rollNo,
        email,
      });
      console.log(result);
      return res.status(200).json({ message: "User created successfully" });
  })
  
  
  
  // --------------------------------- GET ALL USER NAME ---------------------------------------//
  
  router.get('/firstname', async (req,res)=>{
    const allDbUsers = await User.find({});
    const html=`<ul>
    ${allDbUsers.map((user)=> `<li>${user.firstName} </li>`).join(" ")} 
    </ul>`
    
  res.send(html);
  });
  
  
  // --------------------------------- GET ALL USERS ---------------------------------------//
  
  
  router.get('/', async (req,res)=>{
    const allDbUsers = await User.find({});
    return res.json(allDbUsers)
    
  })
  
  
  // // --------------------------------- GET USER INFO USING ID AND UPDATE & DELETE ---------------------------------------//
  router.route('/:id')
  .get( async (req,res)=>{
    const user=await User.findById(req.params.id);
    return res.json(user);
  }).patch(async (req, res)=>{            // ------------- update user value -----------------
       await User.findByIdAndUpdate(req.params.id, {lastName:"Khaby"});
       return res.json({status:"Successfully changed moj kr"});
  }).delete(async (req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: 'Deleted'});   
  })


  module.exports=router;
