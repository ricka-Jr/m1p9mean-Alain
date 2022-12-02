const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');

let sakafo = require('./metier/sakafo') // metier sakafo
let restaurant = require('./metier/restaurant') // metier restaurant
let connex = require('./connection'); // connection base
let commande = require('./metier/commande'); // commande client
let client = require('./metier/client'); // metier client
let ClientModel = require('./model/ClientModel') // model client
const path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

console.log('connecter : ' + connex.conMongoose())

app.get('/findClient/:mail', (req, res) => {
    ClientModel.find({}).exec(function (err, data) {
        if (err) {
            console.log(err);
            res.status(400).send({ error: 'Failed insert' });
        }
        if (!data) res.send(403, { error: 'Authentication Failed' });
        for (let i = 0; i < data.length; i++) {
            if (req.params.mail == data[i].email) {
                console.log(data[i].email)
                res.status(200).send(data);
            }
            else console.log('mail not found')
        }

    });
})


app.get('/findbyRestaurant/:id', sakafo.findByIdRestaurant) //find sakafo

app.get('/findAllRestaurant', restaurant.findAll) //find restaurant

app.post('/inscriptionClient', client.insertClient); // inscription client

app.use('/findCommande', commande.router); // azo dooly ilay request rehetra
app.post('/saveCommandePlat', commande.commandePlat); // azo dooly ilay request rehetra

app.post('/loginClient', client.loginClient) // login client
app.get('/logoutClient/:id', client.logoutClient) // logout client
app.get('/getClient/:id', client.findById) // find by idclient

app.get('/token/:mail/:mdp', (req, res) => {
    // verification mail et mdp
    let token = ''
    if (req.params.mail == 'client@ekaly.mg' && req.params.mdp == 'client1234') {
        token = connex.token()
        res.status(200).send({ token })
    }
    else {
        res.status(400).send("user not found")
    }
    // insert token
    // console.log(req.headers.token)

})

// ========================
// Controllers
// ========================
// **** Menu ****
const menuRouter = express.Router();
const menuController = require('./controller/MenuController');
app.use('/menu', menuRouter);

// ========================
// Routes
// ========================
// **** Menu ****
menuRouter.get('/find-all', menuController.findMenu);

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Listening on port ${port}`);
})