module.exports=function(){

    const db = require(global.rootPath+'/common/server/db.js');

    console.log(db);

    return{
        db:db
    }

}();