
if( typeof(define) == 'undefined'    ){
    var define = function(f){
        module.exports=f();
    }
}

define(function (){

    var component_name="template";

    var config={
        name:component_name,
        path:{
            helloWorld:"/"+component_name+"/helloWorld"
        }
    };
    return config;

});