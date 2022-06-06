const mongoose = require("mongoose");
const productScema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    oldPrice: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("GamesProducts", productScema)