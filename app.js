// Calling libraries
require('dotenv').config();
const express =  require('express');
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
// Middleware
const MongoStore = require('connect-mongo');



// // Config DB
const connectDB = require('./server/config/db');
const { isActiveRoute } = require('./server/helpers/routeHelpers');
// const { mongo } = require('mongoose');
const session = require('express-session');
// Middleware



const app = express();
//const PORT = 5000 || process.env.PORT;
const PORT =process.env.PORT
// //Connect DB
connectDB();

// Pass Search data
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));

// Save Session
app.use(session({
    secret : 'keyboard cat',
    resave : false,
    saveUnitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    })

    // cookie:{maxAge:new Date (Date.now() + (3600000))}

}));



// Public folder containing CSS, Js ...
app.use(express.static('public'));

// Template Engine fou ejs express layout
app.use(expressLayout);
// Main layout
app.set('layout','./layouts/main');
// Set the view engine set to ejs
app.set('view engine','ejs');

app.locals.isActiveRoute = isActiveRoute; 


// Using routes foldder to set main page
app.use('/',require('./server/routes/main'));
app.use('/',require('./server/routes/admin'));

app.listen(PORT,()=>{
    console.log('App Listening on port ${PORT}');
});