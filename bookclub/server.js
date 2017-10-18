 userRegistration = require('./models/UserReistration');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
 const passport = require('passport');

const app = express();
 
mongoose.connect('mongodb://localhost/bookClub',function (err,db) {
    if(err){
        console.log("Unable to connect to db"+ err)
    }
    else{
        console.log('Connection established')
    }
});
var db = mongoose.connection;
app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json());

app.use(passport.initialize());

app.post('/userRegistration',function (req,res) {
   var user = req.body;
    userRegistration.addUserRegistration(user,function (err,user) {
        if(err){
            throw err;
        }
        res.json(user)
    })
});
app.listen(3001,function () {
    console.log("Server is Running at 3001")
});