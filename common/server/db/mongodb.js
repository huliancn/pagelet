const config = require('config');

var database;
if(config.get('profile')==='test'){
   
    //启动内嵌数据库
    var Engine = require('mongodb');
    var db = new Engine.Db('test', new Engine.Server('locahost', 27017));
    module.exports = {
        db: db
    }

}else{

    //获取驱动
    const MongoClient = require('mongodb').MongoClient;
    // Connection URL
    const url = config.get('production.user.db.url')
    // Database Name
    const dbName = config.get('production.user.db.name');
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