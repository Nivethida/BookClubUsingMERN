
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
    name:{
          type: String,
          required: true
         },
    email:{
        type: String,
        required: true
         },
    password: {
        type: String,
        required: true
    }
});

const userRegistration=module.exports = mongoose.model('UserRegistration',registrationSchema);

//Add users to db

module.exports.addUserRegistration = function(user,callback){
    userRegistration.create(user,callback);
}

