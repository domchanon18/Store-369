const Product = require("../models/productData");

module.exports = (req, res) => {
    Product.find().then((products) => {
        console.log(products);
        console.log(typeof products);
        res.render('index', { products });
    }).catch((error) => {
        console.error('Error fetching data:', error);
    });
    console.log("heasdasdasdasdasdasdasdasdasdasd");
}