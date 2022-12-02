const mongoose = require("mongoose");
const tokenSchema = new mongoose.Schema({
  token: {
    type: String,
  },
  client: {
    _id: { type: String },
    nom: { type: String },
    addresse: { type: String },
    email: { type: String },
    password: { type: String },
  }
});


const token = mongoose.model("tokens", tokenSchema);

module.exports = token;
