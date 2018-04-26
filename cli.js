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
                    fsextra.ensureDirSync(dir+'/'+args[2]);
                    fsextra.copySync(__dirname+'/template/component',dir+'/'+args[2],{recursive:true},function(err){
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

    case 'clear':
        switch(args[1]){
            case 'components':
                fsextra.emptyDirSync(__dirname+'/components')
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
            var config = fsextra.readFileSync(dist+'/config.js');
            console.log(config.toString())
            var content = config.toString().replace('{component_name}',"'"+args[1]+"'")
            fsextra.writeFileSync(dist+'/config.js',content);
        }

        child_process.execSync('node '+__dirname+'/server.js',function(error,stdout ,stderr ){
            console.log(stdout);
        })

    break;

    case 'install':

    break;

    default:   
        console.log('args:'+args);
        console.log('help info:')   
    break;
}

//process.exit();