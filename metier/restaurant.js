const express = require('express')
let ModelRestaurant = require('../model/RestaurantModel')
const connex = require('../connection');

function findAllRestaurant(req, res) {
    ModelRestaurant.find({}).exec((err, data) => {
        if (err) {
            console.log(err);
            res.status(400).send({ message: 'ERREUR SERVEUR' });
        }
        if (!data) res.status(403).send({ message: 'NOT DATA' });
        res.status(200).send(data);
    });
}

module.exports = { findAll: findAllRestaurant }