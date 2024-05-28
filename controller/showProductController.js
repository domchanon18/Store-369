const Product = require("../models/productData");

module.exports = (req, res, next) => {
    Product.find().then((products) => {
        console.log(products);
    }).catch((error) => {
        console.error('Error fetching data:', error);
    });

    next();
}