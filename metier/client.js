const express = require('express')
var ClientModel = require('../model/ClientModel')
const connex = require('../connection');
const router = express.Router()
var token = require('./token')

// verification input vide or null
    const isEmpty = (value) => (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    )
    
//   inscription nouveau client
    function insertClient(req, res){
        let client = new ClientModel(req.body);
        try {
            if((!isEmpty(req.body.nom) && !isEmpty(req.body.addresse) && !isEmpty(req.body.email) && !isEmpty(req.body.password))){
                client.save();
                var tokenGenere = connex.token()
                console.log(client)
                token.save(tokenGenere, client)
                res.status(200).send({token: tokenGenere, data: client});
            }
            else res.status(500).send('client vide');
        } catch (error) {
            res.status(400).send('ERROR : CHAMP INVALID');
            console.log("l'erreur est : "+error.message)
        }
    }

// login client
    const arrayToObject = (data) => {
        return data.reduce((client, item) => {
            client = item
            return client
        }, {})
    }
    function loginClient(req, res){
        ClientModel.find({ email: req.body.email, password: req.body.password}).exec((err, data) => {
            if (err) res.status(400).send({ message: 'USER NOT FOUND' });
            if (isEmpty(data)) res.status(403).send({ message: 'AUTHENTICATION FAILED' });
            else{
                var tokenGenere = connex.token()
                let client = arrayToObject(data)
                token.save(tokenGenere, client)
                res.status(200).send({token : tokenGenere, message : 'SUCCESS LOGIN', data : data});
            }
            
        });
    }
    
//  se déconnecter
    function logoutClient(req,res){
        try {
            token.remove(req.body._id)
            res.status(200).send({message : 'SUCCESS DELETE OF TOKEN'});
        } catch (error) {
                res.status(400).send({ message: 'ERREUR SERVEUR' });
        }
    }


// exports.loginClient = loginClient
module.exports = {loginClient : loginClient, insertClient : insertClient, isEmpty : isEmpty, logoutClient : logoutClient}