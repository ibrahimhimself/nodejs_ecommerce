const express = require("express");
const path = require("path");
const session = require('express-session');
const homeRoute = require("./Routes/Home.route");
const userProductRoute = require('./Routes/userProduct.route')
const authRoute = require('./Routes/Auth.route');
const productDetailsRoute = require("./Routes/productDetails.route");
const app = express();
require('dotenv').config();

app.use(express.static(path.join(__dirname , "Assets")));
app.use(express.static(path.join(__dirname , "Images")));
app.set('views', path.join(__dirname, 'views'));
app.set("view engine" , "ejs");
app.use('/', homeRoute);
app.use('/userProduct', userProductRoute);
app.use('/product', productDetailsRoute);
app.use(express.urlencoded( {extended:false} ));
app.use(express.json());
app.use(session({
    name: 'session',
    secret: 'my_secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 3600 * 1000, // 1hr
    }
}));
app.use(authRoute);
app.use((err, req, res, next) => {
    console.log(err);
    return res.send('Internal Server Error');
});

app.listen(process.env.PORT|4000 , ()=>{
    console.log("Server Start On Port 4000");
    console.log(process.env.PORT)
})