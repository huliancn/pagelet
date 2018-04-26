
//前后端共享数据结构

//获取组件名
var component_name = null;
if( typeof(define) == 'undefined'    ){
    var path = __dirname;
    component_name=path.substring(path.indexOf('components')+11,path.length);
    var define = function(f){
        module.exports=f();
    }
}else{
    var path = location.pathname;
    component_name=path.substring(path.indexOf('components')+11,path.lastIndexOf('/browser'));
}

//定义共享配置数据
define(function (){

    var config={
        name:component_name,
        path:{
            helloWorld:"/"+component_name+"/helloWorld"
        }
    };
    return config;

});