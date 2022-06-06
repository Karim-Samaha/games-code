const express = require('express');
const router = express.Router();
const GamesProducts = require('../Schema/productSchema');

// Geting Products
router.get("/products", async (req, res) => {
    const Posts = await GamesProducts.find();
    res.json(Posts)
})

// Posting a new Product
router.post("/products", async (req, res) => {
    const Posts = new GamesProducts({
        id: req.body.id,
        name: req.body.name,
        img: req.body.img,
        price: req.body.price,
        oldPrice: req.body.price,
        qty: req.body.qty,
        category: req.body.category
    });
    try {
        Posts.save()
            .then((data) => res.json(data))
            .catch((err) => res.json({ message: err }))
    } catch (err) {
        res.json({ message: err })
    }
})
//Geting A specific Product

router.get("/products/:id", async (req, res) => {
    try {
        const Posts = await GamesProducts.find();
        const specificPost = await Posts.filter((post) => post.id == req.params.id)
        res.json(specificPost)
    } catch (err) {
        res.json({ message: err })
    }
})

//Delete Products
router.delete('/products', async (req, res) => {
    const remove = await GamesProducts.remove()
    res.json(remove)
})

module.exports = router;