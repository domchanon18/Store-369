const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");               // to connect to mongoDB
const expressSession = require("express-session");  // save session
const flash = require("connect-flash");             // alert error message

// MongoDB connection
mongoose.connect("mongodb+srv://user1:0123@store369.pmx0lfe.mongodb.net/Store_Selection?retryWrites=true&w=majority&appName=Store369", {
    useNewUrlparser: true
})

global.loggedIn = null;

//Controller
const indexController = require("./controller/indexController.js");
const loginController = require("./controller/loginController.js");
const loginUserController = require("./controller/loginUserController.js");
const homeController = require("./controller/homeController.js");
const logoutController = require("./controller/logoutController.js");
const registerController = require("./controller/registerController.js");
const storeUserController = require("./controller/storeUserController.js");

//middleware
const authmiddleware = require("./middleware/authMiddleware.js");
const redirectIfAuth = require("./middleware/redirectIfAuth.js");

app.use(express.static("files"));
app.use(express.json());
app.use(express.urlencoded());
app.use(expressSession({
    secret: "node secrets"
}));
app.use(flash());
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next();
})
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// route
app.get('/', indexController);
app.get('/login', redirectIfAuth, loginController);
app.get('/home', authmiddleware, homeController);
app.get('/logout', logoutController);
app.get('/register', redirectIfAuth, registerController);
app.post('/user/login', redirectIfAuth, loginUserController);
app.post('/user/register', storeUserController);


// [npm run start] to start server with nodemon
app.listen(3000, () => { console.log("listening to port 3000"); });