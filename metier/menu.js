const express = require('express')
const connex = require('../connection');
const Menu = require('../model/MenuModel');
const ServiceExtension = require('../service/ServiceExtension');

class MenuMetier extends ServiceExtension {
    findMenu() {
        try {
            Menu.find()
                .then(
                    (data) => {
                        this.res.status(200).json({ 'status': 'OK', 'data': { 'menu': data } });
                    }
                )
                .catch(
                    (err) => {
                        this.res.status(500).json({ 'status': 'KO', 'error': err.message });
                    }
                );
        } catch (error) {
            this.res.status(500).json({ 'status': 'KO', 'error': error.message });
        }
    }
}

module.exports = MenuMetier