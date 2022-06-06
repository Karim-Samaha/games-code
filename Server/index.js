const express = require("express");
const app = express();
const mongoose = require("mongoose")
const Users = require("./Schema/usersSchema");
const bodyParser = require("body-parser");
const cors = require('cors')
require('dotenv/config')
app.use(cors())
app.use(bodyParser.json())

//Users Methods
const usersMethods = require('./Routes/Users')
app.use("/", usersMethods)


//Products Methods
const productsMethods = require('./Routes/Products');
app.use("/", productsMethods)




//Connect To MongoDb
mongoose.connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-shard-00-00.tuoj3.mongodb.net:27017,cluster0-shard-00-01.tuoj3.mongodb.net:27017,cluster0-shard-00-02.tuoj3.mongodb.net:27017/?ssl=true&replicaSet=atlas-xjyles-shard-0&authSource=admin&retryWrites=true&w=majority`,
    (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("connected")
        }
    }
)

// For cors error
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.listen(process.env.PORT || 5000)

