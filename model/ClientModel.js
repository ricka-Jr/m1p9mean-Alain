const mongoose = require("mongoose");
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
});


const client = mongoose.model("clients", clientSchema);

module.exports = client;



