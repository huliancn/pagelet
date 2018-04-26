
//前后端共享数据结构

//获取组件名
var component_name = {component_name};

if( typeof(define) == 'undefined'    ){
    var define = function(f){
        module.exports=f();
    }
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