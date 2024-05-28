// get data from batteries and create/update to database
const product = require("../models/productData");

module.exports = (req, res) => {
    // add product
    console.log(req.body);
    product.create(req.body).then(() => {
        console.log("Product add successfully");
        res.redirect('/home');
    }).catch(error => {
        console.log(error.errors);

        if (error) {
            const validationError = Object.keys(error.errors).map(key => error.errors[key].message);
            req.flash('validationError', validationError);
            req.flash('data', req.body);

            return res.redirect('/addItem');
        }
    })
}