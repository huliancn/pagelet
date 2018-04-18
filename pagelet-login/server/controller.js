module.exports=function(app){
    
    var config = require('../config.js');

    app.get(config.path.login,function(req,res){
        console.log('test');
        res.json('test');
    })

    app.get(config.path.captcha,function(req,res){
        var captcha = require('svg-captcha');
        var data = captcha.create();
        console.log('captcha:'+data.text);
        res.type('svg')
        res.send(data.data);
    })

};