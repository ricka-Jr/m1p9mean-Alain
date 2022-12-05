const PlatMetier = require("../metier/plat");

exports.findPlat = (req, res) => {
    let platService = new PlatMetier(req, res);
    platService.findPlat();
}