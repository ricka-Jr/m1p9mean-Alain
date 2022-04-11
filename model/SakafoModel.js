const mongoose = require("mongoose");
const sakafoSchema = new mongoose.Schema({
    designation: {
      type: String,
    },
    quantite: {
      type: Number,
    },
    prix: {
      type: Number,
    },
    profil: {
      type: String,
    },
    restaurant: {
      _id: {type: String},
      nom: {type: String},
      email: {type: String},
      mdp: {type: String},
      profil: {type: String},
    },
});


const kaly = mongoose.model("plats", sakafoSchema);

module.exports = kaly;
