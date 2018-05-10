if( typeof(define) == 'undefined'    ){
    var define = function(f){
        module.exports=f();
    }
}

define(function (){

    var regex={
        USER_NAME_REGEX:/^[a-zA-Z0-9]+$/
    };
    return regex;

});