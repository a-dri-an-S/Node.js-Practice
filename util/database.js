const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

require('dotenv').config();

const mongoConnect = callback => {
    MongoClient.connect(process.env.DB_CONNECT)
        .then(client => {
            console.log('connected!')
            callback(client)
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = mongoConnect;