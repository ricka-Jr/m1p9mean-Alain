var sakafo = require('../model/SakafoModel')

function findByIdRestaurant(req, res){
    sakafo.find({"restaurants._id" : req.params.id}).exec((err, data) => {
        if (err) {
            console.log(err);
            res.status(400).send({ message: 'ERREUR SERVEUR' });
        }
        if (!data) res.status(403).send({ message: 'NOT DATA' });
        res.status(200).send(data);
    });
}

module.exports = {findByIdRestaurant : findByIdRestaurant}
