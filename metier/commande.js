const express = require('express')
var CommandeModel = require('../model/CommandeModel')
var connex = require('../connection');
var client = require('./client')
const router = express.Router()

router
.post('/personnes', function(req, res){
    connex.connex()
    .then((db) => {
        const personneCollection = db.collection('personne')
        return personneCollection
        .insertOne(req.body)
        .then((result) => {
            res.json({status: 'SUCCESS', message: 'Personne created'});
        })
    })
    .catch((error) => {
        res.json({status: 'ERROR', message: error.message});
    })
})
.get('/personnes', function (req, res){
    connex.connex()
    .then((db) => {
        const personneCollection = db.collection('personne')
        return personneCollection
        .find()
        .toArray()
        .then((result) => {
            res.json({status: 'SUCCESS', data: result});
        })
    })
    .catch((error) => {
        res.json({status: 'ERROR', message: error.message});
    })
})

router.get('*', (req, res) => {
    res.send('haha')
})

function commandePlat(req, res){
    let commande = new CommandeModel(req.body);
    try {
        if((!client.isEmpty(req.body))){
            commande.save();
            res.status(200).send({message: 'COMMANDE PASSE', data: commande});
        }
        else res.status(500).send('plat vide');
    } catch (error) {
        res.status(400).send('ERROR : CHAMP INVALID');
        console.log("l'erreur est : "+error.message)
    }
}

module.exports = {router:router, commandePlat:commandePlat};