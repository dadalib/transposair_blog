const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Module
const UserPostSchema = new Schema({
    username:{
        type: String,
        required :true,
        unique:true
    },
    password:{
        type: String,
        required : true,

    }

});

// Export module
module.exports = mongoose.model('User',UserPostSchema);