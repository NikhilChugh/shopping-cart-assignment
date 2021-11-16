const express = require("express");
const app = express();
const path = require("path")
var cors = require("cors")
var banners = require("./models/banners.model");
var categories = require("./models/categories.model");
var products = require("./models/products.model");

app.use(cors());

app.use(express.static(path.join(__dirname, "static")));
app.use(express.json())

app.get("/banners", (req,res) => {
    res.json(banners)
})

app.get("/categories", (req,res) => {
    res.json(categories)
})

app.get("/products/:categoryId", (req,res) => {
    var categoryId = req.params.categoryId;

    let filteredProducts = products.filter(product => product.category === categoryId)
    
    res.json(filteredProducts)
})

app.listen(5000, () => console.log("Server running @ 5000"));