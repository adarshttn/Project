const router = require("express").Router();
const Signupput =require('../Models/SignupDb');
const bcrypt=require('bcrypt');

//Updating database by checking all the requirements provide by the user

router.put('/:id',async(req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt =await bcrypt.genSalt(10);
                req.body.password=await bcrypt.hash(req.body.password,salt);
            } 
            catch(err){
                return res.status(500).json(err);
            }
        }
        try{
            const user= await Signupput.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(200).json('Your Account has been succefully updated');
    }catch(err){
        return res.status(500).json(err);
    }
}else{
    return res.status(403).json("Can't update other user Account ");
}});

router.delete('/:id',async(req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user= await Signupput.findByIdAndDelete(req.params.id);
        res.status(200).json('Your Account has been succefully deleted');
    }catch(err){
        return res.status(500).json(err);
    }
}else{
    return res.status(403).json("Can't delete other user Account ");
}}
);



module.exports = router;