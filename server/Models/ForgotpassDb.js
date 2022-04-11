const mongoose = require('mongoose');

const forgotpassSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    newpass:{
        type: String,
        required: true
    },
    confirmpass:{
        type: String,
        required: true
    }
});

module.exports=mongoose.model('Forgotpass', forgotpassSchema);