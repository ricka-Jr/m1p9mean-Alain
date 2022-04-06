const express = require('express')
var ClientModel = require('./client')
const connex = require('./connection');
const router = express.Router()

const isEmpty = (value) => (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  )

router.post('/insertClient', (req, res) => {
    let client = new ClientModel(req.body);
    var token = ''
    try {
        if((!isEmpty(req.body.nom) && !isEmpty(req.body.addresse) && !isEmpty(req.body.email) && !isEmpty(req.body.password))){
            client.save();
            token = connex.token()
            res.status(200).send({token});
        }
        else res.status(500).send('client vide');
    } catch (error) {
        // error.message = 'hahahaha'
        res.status(400).send('ERROR : CHAMP INVALID');
        console.log("l'erreur est : "+error.message)
    }
})
module.exports = router