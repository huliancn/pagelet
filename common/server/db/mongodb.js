const config = require('config');

var database;
if(config.get('Profile')==='TEST'){
    database = require('tungus');
}else{
    database = require('mongodb');
}

