module.exports=function(){

    var log4js = require('log4js');
    var express = require('express');

    var app = express();
    var log = log4js.getLogger();




    return {
        app:app,
        log:log
    }

}