const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
var ClientModel = require('./client')
var connex = require('./connection');
var commande = require('./commande');
var client = require('./inscription_client');
const app = express();
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



app.post('/inscriptionClient', client.insertClient); // inscription client

app.use('/findCommande', commande.router); // azo dooly ilay request rehetra

app.post('/login', client.loginClient) // login client

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