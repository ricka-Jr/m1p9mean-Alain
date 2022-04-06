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

app.post('/newClient', (req, res) => {
    const client = new ClientModel(req.body);
  
    try {
        client.save();
      res.send(client);
      console.log('insert ok');
    } catch (error) {
      res.status(500).send(error);
        console.log("erreur : "+error)
    }
})

app.get('/findClient', (req, res) => {
    ClientModel.find({}).exec(function (err, data) {
        if (err) {
            console.log(err);
            res.status(200).send({ error: 'Failed insert' });
        }

        if (!data) {
            res.send(403, { error: 'Authentication Failed' });
        }
        res.status(200).send(data);
        console.log('success generate List');
    });
})

app.use('/allCLient', client); // client

app.use('/findCommande', commande.router); // azo dooly ilay request rehetra

app.use(express.static(path.join(__dirname,'crud-angular')));//necessaire

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,'crud-angular/index.html'));
    res.send('./crud-angular/index');
})

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


// token = connex.token()
// console.log(token)
const port = process.env.PORT || 3000;
app.listen(port, function (){
    console.log(`Listening on port ${port}`); 
})