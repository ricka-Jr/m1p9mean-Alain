const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema(
    {
        plat: String,
        profil: String
    },
    {
        collection: 'menu'
    }
);

const menu = mongoose.model("menu", menuSchema);

module.exports = menu;
