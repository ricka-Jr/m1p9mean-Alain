const mongoose = require("mongoose");
const platSchema = new mongoose.Schema(
    {
        designation: String,
        quantite: Number,
        prix: Number,
        profil: String,
        menu: {
            _id: String,
            plat: String,
            profil: String
        },
    },
    {
        collection: 'nos_plat'
    }
);


const plat = mongoose.model("nos_plat", platSchema);

module.exports = plat;
