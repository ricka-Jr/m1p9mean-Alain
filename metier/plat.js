const express = require('express')
const connex = require('../connection');
const plat = require('../model/PlatModel');
const ServiceExtension = require('../service/ServiceExtension');

class PlatMetier extends ServiceExtension {
    findPlat() {
        try {
            plat.find({ 'menu._id': this.req.params.id })
                .then(
                    (data) => {
                        this.res.status(200).json({ 'status': 'OK', 'data': { 'plats': data } });
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

module.exports = PlatMetier