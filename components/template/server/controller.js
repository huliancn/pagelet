module.exports=function(app){
    
    //获取配置，主要用于前后端共享数据
    var config = require('../config.js');
    var service = require('./service');
  
    //名称：Hello World
    //描述：Hello World
    //返回：Hello World
    app.get(config.path.helloWorld,function(req,res){
        res.json(service.helloWorld());
    })

};