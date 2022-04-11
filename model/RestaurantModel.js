const mongoose = require("mongoose");
const restaurantSchema = new mongoose.Schema({
    nom: {
      type: String,
    },
    email: {
      type: String,
    },
    mdp: {
      type: String,
    },
    profil: {
      type: String,
    },
    contact: {
      type: String,
    },
});


const restaurant = mongoose.model("restaurants", restaurantSchema);

module.exports = restaurant;
