const express = require('express')
var connex = require('./connection');
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

function calcul(a, b){
    return a + b
}

module.exports = {router:router,calc:calcul};