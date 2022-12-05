const mongoose = require("mongoose");
let crypto = require('crypto'); 
const clientSchema = new mongoose.Schema({
  nom: {
    type: String,
    // required: true,
  },
  addresse: {
    type: String,
    // required: false,
  },
  email: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  salt : String
});

clientSchema.methods.setPassword = function(password) { 
     this.salt = crypto.randomBytes(16).toString('hex'); 
     this.password = crypto.pbkdf2Sync(password, this.salt,  
     1000, 64, `sha512`).toString(`hex`); 
 }; 
   
 // Method to check the entered password is correct or not 
 clientSchema.methods.validPassword = function(password) { 
     var password = crypto.pbkdf2Sync(password,  
     this.salt, 1000, 64, `sha512`).toString(`hex`); 
     return this.password === password; 
 }; 

const client = mongoose.model("clients", clientSchema);

module.exports = client;



