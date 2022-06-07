const express = require("express");
const router = express.Router();
const Users = require("../Schema/usersSchema");
const bcryptjs = require("bcryptjs")


//Get Users
router.get("/user", async (req, res) => {
    const Posts = await Users.find();
    res.json(Posts)
})

//Creating a User
router.post("/user", async (req, res) => {
    try {
        const hashedPassword = await bcryptjs.hash(req.body.password, 10)
        const Posts = new Users({
            name: req.body.name,       
            password: hashedPassword,
            email: req.body.email
        })
        Posts.save()
            .then(data => {
                res.json(data)
            }).catch(err => {
                res.json({ msggg: `failddd + ${err}` })
            })
    } catch (err) {
        res.json({ msg: err })
    }

})
//Log In
router.post("/user/login", async (req, res) => {
    const allUsers = await Users.find();
    const user = allUsers.filter((user) => user.name === req.body.name)
    // if (user === null ) {
    //     return send("Not there ")
    // }
    try {
        if (await bcryptjs.compare(req.body.password, user[0].password)) {
            res.send("Loged In susscess")
            console.log("Loged In susscess")
        } else (
            res.send("Wrong Password")
        )
    } catch (err) {
        res.send(err)
    }
})

// Delete
router.delete('/user', async (req, res) => {
    const remove = await Users.remove()
    res.json(remove)
})

module.exports = router;
