const router = require("express").Router();
const Profile = require("../Models/Profile");
const signupdb = require("../Models/SignupDb");


router.post('/create',async (req,res)=>{
    try {
        const user = await signupdb.findOne({ email: req.body.email });
        
        if(!user) { 
          return res.status(404).json("user not found");
        }
        else{
            const profile = new Profile({
                username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                designation: req.body.designation,
                mywebsite: req.body.mywebsite,
                gender: req.body.gender,
                birthday:req.body.birthday,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip
            });
            const profile1 = await profile.save();
            res.status(200).json(profile1);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;