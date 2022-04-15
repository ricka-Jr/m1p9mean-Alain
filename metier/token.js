var TokenModel = require('../model/TokenModel')

function save(token, clients){
    var tokens = new TokenModel()
    tokens.token = token
    tokens.client = clients
    tokens.save()
}

function remove(idClient){
    TokenModel.remove({'client._id' : idClient}).exec();
}

module.exports = {save : save, remove : remove}