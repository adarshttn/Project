const router = require('express').Router();
const newcomment=require('../Models/CommentDb');


router.post('/:id',async(req,res)=>{
    try{
        const comment=new newcomment({
            userId:req.body.userId,
            postId:req.body.postId,
            desc:req.body.desc
        });
        await comment.save();
        res.status(201).send(comment);
    }
    catch(err){
        res.status(400).send(err);
    }
});

module.exports=router;