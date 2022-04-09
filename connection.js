const {MongoClient} = require('mongodb')
const mongoose = require('mongoose')

// const connexMongo = "mongodb+srv://kynai:mongo$12HzXHZ@cluster0.vuekb.mongodb.net/kaly?retryWrites=true&w=majority"
const connexMongo = "mongodb://localhost:27017/kaly"
function getDb(){
    return MongoClient.connect(connexMongo, { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('kaly')
        return db;
    })
}

function connectMongoose(){
    return mongoose.connect(connexMongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

function genererToken(){
    var result = '';
    var motCLe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var motCrypte = motCLe.length;
    for ( var i = 0; i < 43; i++ )
        result += motCLe.charAt(Math.floor(Math.random() * motCrypte));
    return result;
}

module.exports = {connex:getDb, token:genererToken, conMongoose : connectMongoose}