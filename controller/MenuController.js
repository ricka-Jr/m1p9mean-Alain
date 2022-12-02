const MenuMetier = require("../metier/menu");

exports.findMenu = (req, res) => {
    let userSrv = new MenuMetier(req, res);
    userSrv.findMenu();
}