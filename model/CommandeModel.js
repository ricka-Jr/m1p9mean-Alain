const mongoose = require("mongoose");
const CommandeSchema = new mongoose.Schema({
    plat: {
        _id: { type: String },
        designation: { type: String },
        prix: { type: Number},
        profil: { type: String },
        restaurant: {
            _id: { type: String },
            nom: { type: String },
        },
    },
    client: {
        _id: { type: String },
        nom: { type: String },
    },
    quantite: {type : Number}
});


const restaurant = mongoose.model("commandes", CommandeSchema);

module.exports = restaurant;
