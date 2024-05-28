const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

});

// connect to mongoDB collection
const product = mongoose.model('Battery', productSchema);
module.exports = product;
let x;
// Fetch all documents
/*product.find().then((products) => {
    x = console.log(products);
}).catch((error) => {
    console.error('Error fetching data:', error);
});

console.log(typeof x);*/