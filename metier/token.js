let TokenModel = require('../model/TokenModel')

function save(token, clients) {
    let tokens = new TokenModel()
    tokens.token = token
    tokens.client = clients
    tokens.save()
}

function remove(idClient) {
    TokenModel.deleteOne({ 'client._id': idClient }).exec();
}

module.exports = { save: save, remove: remove }