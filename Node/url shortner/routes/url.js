const express=require('express');
const {handleGenerateNewShortURL,handleDeleteShortURL}=require("../controller/url")
const router=express.Router();


router.post('/',handleGenerateNewShortURL);
router.delete('/',handleDeleteShortURL);




module.exports=router;