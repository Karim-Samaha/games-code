const mongoose = require("mongoose")

const usersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
    },
  
});

module.exports = mongoose.model("Users", usersSchema)