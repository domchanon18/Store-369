const Product = require("../models/productData");

module.exports = (req, res) => {
    Product.find().then((products) => {
        console.log(products);
        console.log(typeof products);
        res.render('home', { products });
    }).catch((error) => {
        console.error('Error fetching data:', error);
    });
    console.log("heasdasdasdasdasdasdasdasdasdasd");
}