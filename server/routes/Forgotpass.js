const router = require("express").Router();
const Forgotpass = require("../Models/ForgotpassDb");
const signupdb = require("../Models/SignupDb");

router.post('/:id',async(req,res)=>{
    try {
        const user = await signupdb.findOne({ email: req.body.email });
        
        if(!user) { 
          return res.status(404).json("user not found");
        }
        else{
            const forgotpass1 = new Forgotpass({
                email: req.body.email,
                newpass: req.body.newpass,
                confirmpass: req.body.confirmpass
            });
            const forgotpass2 = await forgotpass1.save();
            res.status(200).json(forgotpass2);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;