//全局变量
global.rootPath = __dirname;
global.common = __dirname+'/common/server';

var express = require('express');
var klaw = require('klaw-sync');
var path = require('path');
var log  = require('./common/server/log/log4js.js');

//创建APP
var app = express();

//设置浏览器缓存时间
app.use(express.static(__dirname, { maxAge: 3600000 }));

//解析POST数据
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

//扫描加载控制器
const nameFilter = item => item.path.indexOf('controller.js') > 0
const controllers = klaw(__dirname + '/components', { filter: nameFilter });
controllers.forEach(controller => {
    log.server.info('load controller:' + path.relative(__dirname,controller.path));
    require( './'+path.relative(__dirname,controller.path))(app);
});


//监听端口，启动服务
app.listen(8080, function () {
    log.server.info("server started!");
});