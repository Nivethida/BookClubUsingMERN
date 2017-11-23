 userRegistration = require('./models/UserReistration');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');

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

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}))

 app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
     res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
     next();
 });

const jwtMW = exjwt({
    secret: 'reactjs 4 ever'
});

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
              let token = jwt.sign(
                  {id: user.id, username: user.name },
                  'reactjs 4 ever',
                  { expiresIn: 129600 }
                  ); // Sigining the token

              res.json({
                  success: true,
                  err: null,
                  token
              });

          }
          else{

              res.status(401).json({
                  success: true,
                  err: "UserName or password is incorrect",
                  token: null});
          }

   }
   )

});

 app.get('/userpage', jwtMW /* Using the express jwt MW here */, (req, res) => {
     res.send('You are authenticated'); //Sending some response when authenticated
 });

 app.use(function (err, req, res, next) {
     if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
         res.status(401).send(err);
     }
     else {
         next(err);
     }
 });

app.listen(3001,function () {
    console.log("Server is Running at 3001")
});