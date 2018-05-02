module.exports=function(){

    const config = require('config');
    const log = require('../log/log4js.js');
    
    function getDb( name,callback ){

        if(config.get('profile')==='test'){
   
            //启动内嵌数据库
            var Engine = require('tingodb')();
            var db = new Engine.Db(global.rootPath+'/data/test', {});
            callback(err,db);
        
        }else{
        
            //获取驱动
            const MongoClient = require('mongodb').MongoClient;
            // Connection URL
            const url = config.get('production.db.url')
           
            // Use connect method to connect to the server
            MongoClient.connect(url, function (err, client) {
        
                if (err) {
                    log.server.error('连接芒果数据库失败:'+err);
                    return callback(err);
                }
        
                log.server.debug('连接芒果数据库成功,连接地址:'+url);
        
                const db = client.db(name);
        
                if(!db){
                    log.server.error('打开数据库'+name+'失败！');
                }
        
                return callback(err);
        
            });
        
        }
    }

    return {
        getDb:getDb
    }

}();
