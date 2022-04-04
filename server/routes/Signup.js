const router = require("express").Router();
const Signupget =require('../Models/SignupDb');

router.get('/',async(req,res)=>{
     const user= new Signupget({
          username:"abhishekgautam06",
          email:"abhi@ttn.com",
          password:"12345"
     })
     await user.save();
     res.send('ok');
})


module.exports=router;
