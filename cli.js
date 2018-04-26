#!/usr/bin/env node
const child_process = require('child_process');
const fsextra = require('fs-extra');

var args = process.argv.slice(2);
var dir = process.cwd();

switch(args[0]){

    case 'create':
        switch (args[1]) {
            case 'component':
                if(args.length>2){
                    console.log(__dirname+'/components/template'+'--->'+dir);
                    fsextra.ensureDirSync(dir+'/'+args[2]);
                    fsextra.copySync(__dirname+'/components/template',dir+'/'+args[2],{recursive:true},function(err){
                        console.log(err)
                    });
                }else{
                    console.log('argument component name not specifed!')
                }
                break;
        
            default:
                break;
        }
    break;

    case 'run':
        if(args.length>1){
            const dist = __dirname+'/components/'+args[1];
            fsextra.ensureDirSync(dist);
            fsextra.ensureDirSync(dist);
            fsextra.copySync(dir,dist,{recursive:true},function(err){
                console.log(err)
            });
            child_process.fork();
            require('./server.js');
        }
    break;

    case 'install':

    break;

    default:   
        console.log('args:'+args);
        console.log('help info:')   
    break;
}

//process.exit();