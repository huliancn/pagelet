module.exports=function(){

   const log4js =  require('log4js');
   const log4jsConfig = require(global.rootPath+'/config/log4js.json');
   log4js.configure(log4jsConfig);

   const server = log4js.getLogger('server');

   return{
       server:server
   }

}();