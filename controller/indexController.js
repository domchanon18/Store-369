const product = require("../models/productData");

module.exports = async (req, res) => {
    const items = await product.find({})
    res.render('index', { items });
}