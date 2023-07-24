var fs = require("fs"); //file system - fs 
var data = fs.readFile('txt.txt',function(err,data){
    if(err) return console.log(err);
    console.log(data.toString());
});
console.log('program ended');