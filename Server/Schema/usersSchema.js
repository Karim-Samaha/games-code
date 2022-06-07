const mongoose = require("mongoose")

const usersSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'Username is required',
        trim: true,
        unique: true,
        match: /^[a-zA-Z0-9-_.]+$/
        
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }

});

module.exports = mongoose.model("Users", usersSchema)