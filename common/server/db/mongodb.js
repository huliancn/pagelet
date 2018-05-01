const config = require('config');

var database;
if(config.get('profile')==='TEST'){
   
    var Engine = require('mongodb');
    var db = new Engine.Db('test', new Engine.Server('locahost', 27017));
    module.exports = {
        db: db
    }

}else{

    const MongoClient = require('mongodb').MongoClient;

    // Connection URL
    const url = 'mongodb://localhost:27017';

    // Database Name
    const dbName = 'myproject';

    // Use connect method to connect to the server
    MongoClient.connect(url, function (err, client) {

        if (err) {
            console.log(err);
            return;
        }

        console.log("Connected successfully to server");

        const db = client.db(dbName);

        module.exports = {
            db: db
        }

    });

}