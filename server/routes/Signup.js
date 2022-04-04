const router = require("express").Router();
const Signuppost =require('../Models/SignupDb');
const bcrypt=require('bcrypt');

router.post('/',async(req,res)=>{
     try{
          
          const salt=await bcrypt.genSalt(10);
          const hashedPassword=await bcrypt.hash(req.body.password, salt);

          const user=new Signuppost({
               username:req.body.username,
               email:req.body.email,
               password: hashedPassword,
          })

          const User=await user.save();
          res.status(200).json(user);
     }
     catch(err){
          console.log(err);
     }
})

module.exports=router;
