const mongoose = require('mongoose');

const userProfile= new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
    },
    mywebsite:{
        type:String,
    },
    gender:{
        type:String,
        required:true,
    },
    birthday:{
        type:String,
        default:Date.now,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    zip:{   
        type:Number,
        required:true,
    },
});

module.exports = mongoose.model('userProfile',userProfile);