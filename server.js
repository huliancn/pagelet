//创建APP
var express = require("express");
var app = express();

//设置浏览器缓存时间
app.use(express.static("./",{maxAge: 3600000}));

//解析POST数据
var bodyParser= require("body-parser"); 
app.use(bodyParser.urlencoded({ extended: false })); 

//扫描加载控制器
require('./components/pagelet-login/server/controller.js')(app);

//监听端口，启动服务
app.listen(8080,function(){
    console.log("server started!");
});