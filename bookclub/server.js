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

app.post('/auth',function (req,res) {
  userRegistration.findOne({name: req.body.name}, function (err,user) {
       console.log('user found');
          if(err){
              console.log('This is error response')
              res.json(err)
          }
          if(user.password === req.body.password){
              console.log('user and pass correct')
              res.json(user);

          }
          else{
              console.log("credentials are wrong")
              res.json({data: "Login invalid"});
          }

   }
   )

})

app.listen(3001,function () {
    console.log("Server is Running at 3001")
});