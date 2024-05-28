const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    username: {
        type: String,
        require: [true, 'Please enter a username']
    },
    password: {
        type: String,
        require:[true, 'Please enter password']
    }
})

userSchema.pre("save", function(next) {
    const user = this;

    //encrypted user password [10] times
    bcrypt.hash(user.password, 10).then(hash => {
        user.password = hash;
        next();
    }).catch(err => {
        console.error(err);
    });
});

const User = mongoose.model('User', userSchema);
module.exports = User;