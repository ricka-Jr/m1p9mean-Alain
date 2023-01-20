const express = require('express')
const connex = require('../connection');
const Menu = require('../model/MenuModel');
const ServiceExtension = require('../service/ServiceExtension');

const { dirname } = require('path');
const pathProject = dirname(require.main.filename);

const fs = require('fs');

class MenuMetier extends ServiceExtension {
    base64_encode(file) {
        return fs.readFileSync(file, 'base64');
        // return "data:image/gif;base64," + fs.readFileSync(file, 'base64');
    }
    findMenu() {
        try {
            Menu.find()
                .then(
                    (data) => {
                        data.forEach(object => {
                            let pathImage = pathProject + '/assets/img/menu/' + object.profil
                            object.profil = this.base64_encode(pathImage)
                        });
                        this.res.status(200).json(data);
                        // this.res.status(200).json({ 'status': 'OK', 'data': { 'menu': data } });
                    }
                )
                .catch(
                    (err) => {
                        // this.res.status(500).json({ 'status': 'KO', 'error': err.message });
                        this.res.status(500).json(err.message);
                    }
                );
        } catch (error) {
            this.res.status(500).json(error.message);
        }
    }
}

module.exports = MenuMetier

// Intent intent = getIntent();
//         String txt = intent.getStringExtra("idMenu");
//         test_id.setText(txt);