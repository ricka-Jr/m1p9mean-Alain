const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');

var sakafo = require('./metier/sakafo') // metier sakafo
var restaurant = require('./metier/restaurant') // metier restaurant
var connex = require('./connection'); // connection base
var commande = require('./metier/commande'); // commande client
var client = require('./metier/client'); // metier client
var ClientModel = require('./model/ClientModel') // model client
const path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

console.log('connecter : '+connex.conMongoose())

app.get('/findClient/:mail', (req, res) => {
    ClientModel.find({}).exec(function (err, data) {
        if (err) {
            console.log(err);
            res.status(400).send({ error: 'Failed insert' });
        }
        if (!data) res.send(403, { error: 'Authentication Failed' });
        for(let i=0; i<data.length; i++){
            if(req.params.mail == data[i].email){ 
                console.log(data[i].email)
                res.status(200).send(data);
            }
            else console.log('mail not found')
        }
        
    });
})

app.get('/findAllSakafo/:id', sakafo.findAll) //find sakafo

app.get('/findAllRestaurant', restaurant.findAll) //find restaurant

app.post('/inscriptionClient', client.insertClient); // inscription client

app.use('/findCommande', commande.router); // azo dooly ilay request rehetra

app.post('/loginClient', client.loginClient) // login client

app.get('/token/:mail/:mdp', (req, res) => {
    // verification mail et mdp
    var token = ''
    if(req.params.mail == 'client@ekaly.mg' && req.params.mdp == 'client1234'){
        token = connex.token()
        res.status(200).send({token})
    }
    else{
        res.status(400).send("user not found")
    }
    // insert token
    // console.log(req.headers.token)
    
})


const port = process.env.PORT || 3000;
app.listen(port, function (){
    console.log(`Listening on port ${port}`); 
})