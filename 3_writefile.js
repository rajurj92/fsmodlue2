var fs = require('fs');
var argv = require("yargs").argv;

var fName = argv.fName ? argv.fName :argv.f;

fs.existsSync('filename.txt', function(exists) {
    if (exists) {
        console.log('give New file Name!!');  
    }
});

fs.writeFile('filename.txt', 'You are awesome', function(err){

    if(fName == argv.f){
        console.log('give New file Name!!');     
        
    }else{
        console.log('error!!');
    }
    console.log(argv);

});

