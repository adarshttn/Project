const mongoose=require('mongoose');

const signupSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:6,
        max:15,
        unique:true
    },
    email:{
        type:String,
        require:true,
        min:6,
        max:15,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:4
    },
    isAdmin:{
        type:Boolean,
        default:false
    }    
})

module.exports=mongoose.model('SignUp',signupSchema)