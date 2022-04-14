const express = require('express')
var ClientModel = require('../model/ClientModel')
const connex = require('../connection');
const router = express.Router()

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
        var token = ''
        try {
            if((!isEmpty(req.body.nom) && !isEmpty(req.body.addresse) && !isEmpty(req.body.email) && !isEmpty(req.body.password))){
                client.save();
                token = connex.token()
                res.status(200).send({token: token, data: client});
            }
            else res.status(500).send('client vide');
        } catch (error) {
            res.status(400).send('ERROR : CHAMP INVALID');
            console.log("l'erreur est : "+error.message)
        }
    }

// login client
    function loginClient(req, res){
        ClientModel.find({ email: req.body.email, password: req.body.password}).exec((err, data) => {
            if (err) res.status(400).send({ message: 'USER NOT FOUND' });
            if (isEmpty(data)) res.status(403).send({ message: 'AUTHENTICATION FAILED' });
            else{
                var token = connex.token()
                res.status(200).send({token : token, message : 'SUCCESS LOGIN', data : data});
            }
            
        });
    }
    
//  se déconnecter
    function logoutClient(req,res){
        req.logout();
        res.redirect("/");
    }


// exports.loginClient = loginClient
module.exports = {loginClient : loginClient, insertClient : insertClient, isEmpty : isEmpty}