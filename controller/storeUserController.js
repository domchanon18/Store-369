// get data from user and create/update to database
const user = require("../models/user");

module.exports = (req, res) => {
    user.create(req.body).then(() => {
        console.log("User registered successfully");
        res.redirect('/');
    }).catch((error) => {
        //console.log(error.errors);
        
        if (error) {
            const validationError = Object.key(error.errors).map(key => error.errors[key].message);
            req.flash('validationError', validationError);
            req.flash('data', req.body);

            return res.redirect('/register');
        }
    });
}