var fs = require('fs');
fs.open('sample.txt', 'r+',  function(err, fd) {
    if(err){
        console.log(err);
    }
    else{
        console.log('File opened successfully!!');
    }

});