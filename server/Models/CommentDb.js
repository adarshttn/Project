const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProfileRoute',
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts',
    },
    desc:{
        type: String,
        default: ''
    }


});

module.exports = mongoose.model('Comment', commentSchema);

