const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Module
const PostSchema = new Schema({
    title:{
        type: String,
        required :true
    },
    body:{
        type: String,
        required : true
    },
    createAt: {
        type : Date,
        default : Date.now
    },
    updateAt: {
        type : Date,
        default : Date.now
    },

});

// Export module
module.exports = mongoose.model('Post',PostSchema);