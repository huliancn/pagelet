module.exports=function(){

    const dao = require('./dao.js');

    function helloWorld(){
        return dao.helloWorld();
    }

    return{
        helloWorld:helloWorld
    }

}();